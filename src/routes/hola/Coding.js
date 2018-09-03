import { View, Image, Text } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import textFormat from '../../utils/textFormat';
import './Coding.scss';

export default class extends Component {
  render() {
    const {} = this.props.data;
    return <View className="coding" />;
  }
}
