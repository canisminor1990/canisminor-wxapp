import { View, Text } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import { Iconfont } from '../index';
import './index.scss';

export default class extends Component {
  render() {
    const { type, desc } = this.props;
    return (
      <View className="header">
        <Iconfont type={type} size={2.5} />
        <View className="subtitle">
          {desc}
          <Text>_</Text>
        </View>
      </View>
    );
  }
}
