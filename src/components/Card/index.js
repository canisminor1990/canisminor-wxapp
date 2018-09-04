import { View, Text } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import './index.scss';

export default class extends Component {
	switchTab(url) {
		Taro.switchTab({url});
	}

	navigateTo(url) {
		Taro.navigateTo({url});
	}

	render() {
		const {title, btn, padding, to, tab} = this.props;
		const s                              = {
			padding: '1rem'
		};
		return (
			<View className="card">
				{title ? <View className="header">{title}</View> : null}
				{title ? <View className="split"/> : null}
				<View className="body" style={padding ? s : null}>
					{this.props.children}
				</View>
				{btn ? <View className="split"/> : null}
				{(btn && !tab) ? <View className="footer"
				             onClick={this.navigateTo.bind(this, to)}
				>{btn}</View> : null}
				{(btn && tab) ? <View className="footer"
				             onClick={this.switchTab.bind(this, to)}
				>{btn}</View> : null}
			</View>
		);
	}
}
