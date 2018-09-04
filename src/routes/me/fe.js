import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { WhiteSpace, Loading, Card, Skills, Tools } from '../../components';
import './fe.scss';
import { connect } from '@tarojs/redux';
import action from '../../utils/action';

@connect(({resume, loading}) => ({
	feskills: resume.feskills,
	loading : loading.effects['resume/get']
}))
export default class extends Component {

	static defaultProps = {
		feskills: {
			main : [],
			tools: []
		},
		loading : true
	};

	config = {
		navigationBarTitleText: 'Front-End Skills'
	};

	componentDidMount = () => {
		this.props.dispatch(action('resume/get'));
	};

	render() {
		const {loading, feskills} = this.props;
		return (
			<View className='design'>
				<Card padding>
					{loading ? <Loading/> : <Skills data={feskills.main}/>}
				</Card>
				<WhiteSpace/>
				<Card title="Knowledge Map">
					<View className="list">
						{loading ? <Loading/> : feskills.tools.map((item, i) => (
							<Tools data={item} key={i}/>
						))}
					</View>
				</Card>
				<WhiteSpace/>
			</View>
		);
	}
}

