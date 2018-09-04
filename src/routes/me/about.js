import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { WhiteSpace, Loading, Card, Iconfont, Cell } from '../../components';
import './about.scss';
import { connect } from '@tarojs/redux';
import action from '../../utils/action';

@connect(({resume, loading}) => ({
	about  : resume.about,
	loading: loading.effects['resume/get']
}))
export default class extends Component {

	static defaultProps = {
		about  : {
			introduction: '',
			showcase    : []
		},
		loading: true
	};

	config = {
		navigationBarTitleText: 'About Me'
	};

	componentDidMount = () => {
		this.props.dispatch(action('resume/get'));
	};

	render() {
		const {loading, about} = this.props;
		return (
			<View className='about view'>
				<Card>
				<View className="header">
					<Image className="avatar" src="https://canisminor.cc/img/resume-about-avatar.png" mode="widthFix" lazyLoad/>
					<Iconfont type="name" size={1.5}/>
					{loading ? <Loading/> : (
						<View className="intro">{about.introduction}</View>
					)}
				</View>
				</Card>
				<WhiteSpace/>
				<Card>
					{loading ? <Loading/> : about.showcase.map((item, i) => (
						<Cell key={i} title={item.title.toUpperCase()} desc={item.desc} />
					))}
					<Cell key={4} title="WEBSITE" desc="https://canisminor.cc" noline/>
				</Card>
				<WhiteSpace/>
			</View>
		);
	}
}

