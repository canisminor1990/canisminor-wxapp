import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { Card,WhiteSpace,TabbarShadow } from '../../components';
import './index.scss';

export default class Index extends Component {
	config = {
		navigationBarTitleText: 'Resume'
	};

	state = {
		info: [
			{title: 'age', value: (new Date).getFullYear() - 1990},
			{title: 'experience', value: `+${(new Date).getFullYear() - 2012}`},
			{title: 'energy', value: '∞'}
		],
		cell : [
			{title:"About Me",icon:"",to:""},
			{title:"Education",icon:"",to:""},
			{title:"Experience",icon:"",to:""},
			{title:"Skills",icon:"",to:""},
			{title:"Specialities",icon:"",to:""},
			{title:"Contact",icon:"",to:""},
		]
	};

	render() {
		return (
			<View className="me">
				<Card padding>
					<View className="header">
						<Image src="https://canisminor.cc/img/resume-about-avatar.png" mode="widthFix" lazyLoad/>
						<View className="content">
							<View className="title">杨昱帆 CanisMinor</View>
							<View className="desc">UI / UX Designer & FE Developer</View>
						</View>
					</View>
					<View className="num">
						{this.state.info.map((item,i) => (
							<View  className="box" key={i}>
								<View className="value">{item.value}</View>
								<View className="title">{item.title.toUpperCase()}</View>
							</View>
						))}
					</View>
				</Card>
				<WhiteSpace/>
				<Card>
					{this.state.cell.map((item,i) => (
						<View  className="cell" key={i}>

							<View className="title">{item.title}</View>
						</View>
					))}
				</Card>
				<WhiteSpace/>
				<TabbarShadow/>
			</View>
		);
	}
}
