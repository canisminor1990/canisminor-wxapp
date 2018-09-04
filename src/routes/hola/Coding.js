import { View, Image, Text } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import textFormat from '../../utils/textFormat';
import './Coding.scss';

export default class extends Component {
	static defaultProps = {
		data: [],
		loading: true
	};
  render() {
    const {data} = this.props;
    return (
	    <View className="coding" >
        {data.map((item,i) => (
          <View className="box" key={i}>
            <Image src={`https://canisminor.cc${item.cover}`} mode="widthFix"/>
            <View className="content">
	            <View className="title">{item.title}</View>
	            <View className="desc">{item.desc}</View>
	            <View className="type">{item.type}</View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
