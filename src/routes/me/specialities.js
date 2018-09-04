import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { WhiteSpace, Loading, Card } from '../../components';
import './specialities.scss';
import { connect } from '@tarojs/redux';
import action from '../../utils/action';

@connect(({resume, loading}) => ({
	...resume,
	loading: loading.effects['resume/get']
}))
export default class extends Component {

	static defaultProps = {
		loading: true
	};

	config = {
		navigationBarTitleText: 'Specialities'
	};

	componentDidMount = () => {
		this.props.dispatch(action('resume/get'));
	};

	render() {
		const {loading} = this.props;
		return (
			<View className='specialities'>
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

