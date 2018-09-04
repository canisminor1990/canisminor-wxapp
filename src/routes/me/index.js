import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { Card, WhiteSpace, TabbarShadow } from '../../components';
import './index.scss';

export default class Index extends Component {
	config = {
		navigationBarTitleText: 'Resume',
		backgroundColor: '#f8f8f8',
	};

	state = {
		info: [
			{title: 'age', value: (new Date).getFullYear() - 1990},
			{title: 'experience', value: `+${(new Date).getFullYear() - 2012}`},
			{title: 'energy', value: '∞'}
		],
		cell: [
			{title: 'About Me', icon: 'cell-about.png', to: 'about'},
			{title: 'Education', icon: 'cell-education.png', to: 'education'},
			{title: 'Experience', icon: 'cell-experience.png', to: 'experience'},
			{title: 'Design Skills', icon: 'cell-design.png', to: 'design'},
			{title: 'Front-End Skills', icon: 'cell-fe.png', to: 'fe'},
			{title: 'Specialities', icon: 'cell-specialities.png', to: 'specialities'},
			{title: 'Contact', icon: 'cell-contact.png', to: 'contact'}

		]
	};

	navigateTo(prop) {
		const url = `/routes/me/${prop}`;
		Taro.navigateTo({url});
	}

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
						{this.state.info.map((item, i) => (
							<View className="box" key={i}>
								<View className="value">{item.value}</View>
								<View className="title">{item.title.toUpperCase()}</View>
							</View>
						))}
					</View>
				</Card>
				<WhiteSpace/>
				<Card>
					{this.state.cell.map((item, i) => (
						<View className="cell" hoverClass="cell-hover" key={i} onClick={this.navigateTo.bind(this, item.to)}>
							<Image className="icon" src={`/asset/img/${item.icon}`} mode="widthFix" lazyLoad/>
							<View className="title">
								{item.title}
								<Image className="right" src={`/asset/img/right.png`} mode="widthFix" lazyLoad/>
							</View>
						</View>
					))}
				</Card>
				<WhiteSpace/>
				<TabbarShadow/>
			</View>
		);
	}
}
