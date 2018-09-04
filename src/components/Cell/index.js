import { View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import './index.scss';

export default class extends Component {
	render() {
		const {title, desc, noLine} = this.props;
		return (
			<View className="cell" style={noLine ? {border:"none"} : null}>
				<View className="title">{title}</View>
				<View className="desc">{desc}</View>
			</View>
		);
	}
}
