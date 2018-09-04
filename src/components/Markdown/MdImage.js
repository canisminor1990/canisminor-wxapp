import { View, Image } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import ImageStyle from '../../utils/imageStyle';
import './MdImage.scss';

export default class extends Component {
	render() {
		const {src, alt} = this.props;

		return alt !== 'video' ? (
			                       <Image
				                       mode="widthFix"
				                       className="inline_image"
				                       style={ImageStyle(alt)}
				                       src={src}/>
		                       )
		                       : <View className="no-video">暂不支持视频</View>;
	}
}
