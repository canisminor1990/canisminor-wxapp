import { Image, Text, View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import './index.scss';

export default class extends Component {
  render() {
    const { data = [] } = this.props;
    return (
	    <View className="skills">
		    {data.map((item,i) => (
			    <View className="box" key={i}>
				    <Image lazyLoad src={`https://canisminor.cc${item.icon}`} mode="widthFix" />
				    <Text>{item.title}</Text>
			    </View>
		    ))}
	    </View>
    );
  }
}
