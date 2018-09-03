import { View, Image, Text } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import { Project } from '../../components';
import './Design.scss';

export default class extends Component {
	render() {
		const {data = []} = this.props;
		return (
			<View className="design">
				{data.map((item, i) => (
					<View className="project" key={i}>
						<Project data={item}/>
					</View>
				))}
			</View>
		);
	}
}
