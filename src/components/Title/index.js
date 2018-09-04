import { View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import './index.scss';
import { Iconfont } from '../index';

export default class extends Component {
  render() {
    const { type,desc } = this.props;
    return (
	    <View className="header">
		    <Iconfont type={type} size={2.5}/>
		    <View className="subtitle">{desc}<View>_</View></View>
	    </View>
    );
  }
}
