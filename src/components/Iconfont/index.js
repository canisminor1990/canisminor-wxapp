import { Component } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import _ from 'lodash';
import classNames from 'classnames';
import './index.scss';

export default class Iconfont extends Component {
  render() {
    const { size = 1, type = '', style, className } = this.props;
    let Size;
    if (!_.isNumber(size)) {
      if (size.indexOf('px') > -1) Size = `${(size / 16).toFixed(4)}px`;
    } else {
      Size = `${size}rem`;
    }
    const c = classNames('cm-iconfont', `icon-${type}`, className);
    const s = {
      fontSize: Size,
      lineHeight: Size,
      minWidth: Size,
      display: 'inline-block',
      ...style,
    };

    return <Text className={c} style={s} />;
  }
}
