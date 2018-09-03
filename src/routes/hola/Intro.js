import { View, Image, Text } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import textFormat from '../../utils/textFormat';
import './Intro.scss';

export default class extends Component {
  render() {
    const { skills = [], title, desc } = this.props.data;
    return (
      <View className="intro">
        <View className="skills">
          {skills.map((item,i) => (
            <View className="box" key={i}>
              <Image src={`https://canisminor.cc${item.icon}`} mode="widthFix" />
              <Text>{item.title}</Text>
            </View>
          ))}
        </View>
        <View className="content">
          <View className="title">{textFormat(title)}</View>
          <View className="desc">{textFormat(desc[0])}</View>
          <View className="desc">{textFormat(desc[1])}</View>
        </View>
      </View>
    );
  }
}
