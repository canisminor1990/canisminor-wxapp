import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import _ from 'lodash';
import { WhiteSpace, Loading, Card, TabbarShadow, Project, Title } from '../../components';
import './index.scss';
import { connect } from '@tarojs/redux';
import action from '../../utils/action';

@connect(({projects, loading}) => ({
	...projects,
	loading: loading.effects['projects/get']
}))
export default class extends Component {

	static defaultProps = {
		main   : [],
		extra  : [],
		loading: true
	};

	config = {
		navigationBarTitleText: 'Projects'
	};

	componentDidMount = () => {
		this.props.dispatch(action('projects/get'));
	};

	onShareAppMessage = () => {
		return {
			title: 'Projects - CanisMinor',
			path : 'routes/projects/index',
			imageUrl: '/asset/share-projects.png'
		};
	};

	navigateTo(filename) {
		filename = _.last(filename.split(/\//g));
		const url = filename === 'instant-zine'
		            ? '/routes/instant/index'
		            : `/routes/post/index?id=${filename}`;
		Taro.navigateTo({url});
	}

	render() {
		const {main, extra, loading} = this.props;
		return (
			<View className='projects'>
				<Title type="project" desc="Selection of my recent works" />
				<Card>
					{loading ? <Loading/> : main.map((item, i) => (
						<View className="project" key={i} onClick={this.navigateTo.bind(this, item.to)}>
							<Project data={item} num={i}/>
						</View>
					))}
				</Card>
				<WhiteSpace/>
				<Card title="School Works">
					{loading ? <Loading/> : extra.map((item, i) => (
						<View className="project" key={i*10} onClick={this.navigateTo.bind(this, item.to)}>
							<Project data={item} num={i}/>
						</View>
					))}
				</Card>
				<WhiteSpace/>
				<TabbarShadow/>
			</View>
		);
	}
}

