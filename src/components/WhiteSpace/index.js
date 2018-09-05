import { View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import './index.scss';

export default class extends Component {
  render() {
    const { footer } = this.props;
    return <View className="white-space" style={footer ? { height: '4rem' } : null} />;
  }
}
