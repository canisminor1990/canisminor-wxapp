import { View, Image } from '@tarojs/components';
import Taro,{ Component } from '@tarojs/taro';
import ImageStyle from '../../utils/imageStyle';
import './MdImage.scss';

export default class extends Component {

	handleImgPreview(url) {
		Taro.previewImage({urls: [url]});
	}

	navigateTo(href) {
		const url = `/routes/qrcode/index?title=Video&url=${href}`;
		Taro.navigateTo({ url });
	}

  render() {
    const { src, alt } = this.props;

    return alt !== 'video' ? (
      <Image mode="widthFix"
             className="inline_image"
             style={ImageStyle(alt)} src={src}
             onClick={this.handleImgPreview.bind(this, src)}
      />
    ) : (
      <View className="no-video" onClick={this.navigateTo.bind(this, src)}>暂不支持视频</View>
    );
  }
}
