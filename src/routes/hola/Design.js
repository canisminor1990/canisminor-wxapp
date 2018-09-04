import { View, Image, Text } from '@tarojs/components';
import Taro,{ Component } from '@tarojs/taro';
import { Project } from '../../components';
import './Design.scss';
import _ from "lodash"
export default class extends Component {
	static defaultProps = {
		data: [],
		loading: true
	};

	navigateTo(filename) {
		filename = _.last(filename.split(/\//g));
		const url = `/routes/post/index?id=${filename}`
		Taro.navigateTo({url});
	}

	render() {
		const {data} = this.props;
		return (
			<View className="design">
				{data.map((item, i) => (
					<View className="project" key={i} onClick={this.navigateTo.bind(this, item.to)}>
						<Project data={item}/>
					</View>
				))}
			</View>
		);
	}
}
