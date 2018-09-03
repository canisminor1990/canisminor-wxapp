import { View, Image, Text } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import textFormat from '../../utils/textFormat';
import './Design.scss';

export default class extends Component {
  render() {
    const data = this.props.data;
    return (
      <View className="design">
        {data.map(item => (
          <View className="cover" style={{ backgroundImage: `url(${item.cover})` }}>
            <View className="content">
              <View className="title">{item.title}</View>
              <View className="type">{item.type.toUpperCase()}</View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
