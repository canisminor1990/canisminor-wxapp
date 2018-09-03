import { View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import { AtActivityIndicator } from 'taro-ui';
import './index.scss'

export default class extends Component {
	render() {
		const {height = "4rem"} = this.props;
		return (
			<View className="loading" style={{minHeight: height}}>
				<AtActivityIndicator color="#9d8352" />
			</View>
		)
	}
}