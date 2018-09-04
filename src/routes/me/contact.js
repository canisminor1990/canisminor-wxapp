import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { WhiteSpace, Loading, Card } from '../../components';
import './contact.scss';
import { connect } from '@tarojs/redux';
import action from '../../utils/action';

@connect(({contact, loading}) => ({
	...contact,
	loading: loading.effects['contact/get']
}))
export default class extends Component {

	static defaultProps = {
		loading: true
	};

	config = {
		navigationBarTitleText: 'Contact'
	};

	componentDidMount = () => {
		this.props.dispatch(action('contact/get'));
	};

	render() {
		const {loading} = this.props;
		return (
			<View className='contact'>
				<Card padding>
					{loading ? <Loading/> : (
						<View></View>
					)}
				</Card>
				<WhiteSpace />
			</View>
		);
	}
}

