import { View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import './index.scss';

export default class extends Component {
  render() {
    const { title, desc, noline } = this.props;
    return (
      <View className="cell" style={noline ? { border: 'none' } : null}>
        <View className="title">{title}</View>
        <View className="desc">{desc}</View>
      </View>
    );
  }
}
