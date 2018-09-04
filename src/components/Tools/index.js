import { Image, View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import './index.scss';

export default class extends Component {
  render() {
    const { data } = this.props;
    return (
      <View className="tool">
        <Image src={`https://canisminor.cc${data.icon}`} mode="widthFix" lazyLoad />
        <View className="title">{data.title}</View>
      </View>
    );
  }
}
