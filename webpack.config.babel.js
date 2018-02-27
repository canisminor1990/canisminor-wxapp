import { resolve, join } from 'path';
import { DefinePlugin, EnvironmentPlugin, IgnorePlugin, optimize } from 'webpack';
import WXAppWebpackPlugin, { Targets } from './lib/wxappPlugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MinifyPlugin from 'babel-minify-webpack-plugin';

const { NODE_ENV } = process.env;
const isDev = NODE_ENV !== 'production';
const rpxLoader = resolve('lib/rpxLoader.js');
const jsx2jsonLoader = resolve('lib/jsx2jsonLoader.js');

const copyConfig = (config = []) => {
  const copyFile = ['project.config.json', 'img'];
  copyFile.forEach(file => config.push({ from: join('./src', file), to: file }));
  return config;
};
const relativeFileLoader = (ext = '[ext]') => [
  {
    loader: 'file-loader',
    options: {
      publicPath: '',
      useRelativePath: true,
      name: `[name].${ext}`,
      emitFile: false,
    },
  },
  {
    loader: 'file-loader',
    options: {
      publicPath: '',
      context: resolve('src'),
      name: `[path][name].${ext}`,
    },
  },
];

export default {
  entry: {
    app: [
      `es6-promise/dist/es6-promise.auto${isDev ? '.min' : ''}.js`,
      './src/utils/bomPolyfill.js',
      './src/app.js',
      './src/app.jsx',
    ],
  },
  target: Targets['Wechat'],
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: resolve('dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          ...relativeFileLoader('wxss'),
          { loader: rpxLoader },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [resolve('src', 'styles'), resolve('src')],
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /.jsx$/,
        include: /src/,
        use: [...relativeFileLoader('json'), { loader: jsx2jsonLoader }],
      },
      {
        test: /\.(json|png|jpg|gif|wxss)$/,
        include: /src/,
        use: relativeFileLoader(),
      },
      {
        test: /\.wxml$/,
        include: resolve('src'),
        use: [
          {
            loader: 'file-loader',
            options: {
              context: 'src/',
              name: '[path][name].[ext]',
            },
          },
          { loader: rpxLoader },
          {
            loader: 'wxml-loader',
            options: {
              root: resolve('src'),
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new EnvironmentPlugin({ NODE_ENV: 'development' }),
    new DefinePlugin({ __DEV__: isDev }),
    new WXAppWebpackPlugin({ clear: !isDev }),
    new optimize.ModuleConcatenationPlugin(),
    new CopyWebpackPlugin(copyConfig()),
    !isDev && new MinifyPlugin(),
  ].filter(Boolean),
  devtool: isDev ? 'source-map' : false,
  resolve: {
    modules: [resolve(__dirname, 'src'), 'node_modules'],
  },
  watchOptions: {
    ignored: /build|manifest/,
    aggregateTimeout: 300,
  },
};
