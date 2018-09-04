import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import _ from 'lodash';
import { WhiteSpace, Loading, Card, TabbarShadow, Project } from '../../components';
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

	navigateTo(filename) {
		filename = _.last(filename.split(/\//g));
		const url = `/routes/post/index?id=${filename}`
		Taro.navigateTo({url});
	}

	render() {
		const {main, extra, loading} = this.props;
		return (
			<View className='projects'>
				<Card padding>
					{loading ? <Loading/> : main.map((item, i) => (
						<View className="project" key={i} onClick={this.navigateTo.bind(this, item.to)}>
							<Project data={item}/>
						</View>
					))}
				</Card>
				<WhiteSpace/>
				<Card title="School Works" padding>
					{loading ? <Loading/> : extra.map((item, i) => (
						<View className="project" key={i}>
							<Project data={item}/>
						</View>
					))}
				</Card>
				<WhiteSpace/>
				<TabbarShadow/>
			</View>
		);
	}
}

