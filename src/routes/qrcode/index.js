import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './index.scss';
import QueryString from 'query-string';

export default class extends Component {
	state = {
		url  : '',
		title: ''
	};

	config = {
		navigationBarTitleText: 'Qrcode',
		backgroundColor: '#ffffff',
	};

	componentDidMount = () => {
		const {url, title} = this.$router.params;
		this.setState({url, title});
	};

	render() {
		const {url, title} = this.state;
		const qrcode       = 'http://qr.liantu.com/api.php?' + QueryString.stringify(
			{
				w   : 720,
				m   : 48,
				el  : 'l',
				pt  : '9d8352',
				text: url
			});

		return (
			<View className='qrcode'>
				<View className='box'>
				<Image lazyLoad src={qrcode} mode="widthFix"/>
				<View className='title'>{title}</View>
				<View className='desc'>{url}</View>
				</View>
			</View>
		);
	}
}
