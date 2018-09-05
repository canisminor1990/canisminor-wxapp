import { Image } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import './index.scss';

export default class extends Component {
  handleImgPreview(url) {
    Taro.previewImage({ urls: [url] });
  }

  render() {
    const { style, src } = this.props;
    return (
      <Image
        style={style}
        src={src}
        mode="widthFix"
        lazyLoad
        onClick={this.handleImgPreview.bind(this, src)}
      />
    );
  }
}
