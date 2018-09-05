import { View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import { Skills } from '../../components';
import textFormat from '../../utils/textFormat';
import './Intro.scss';

export default class extends Component {
  static defaultProps = {
    title: '',
    desc: [null, null],
    skills: [],
    loading: true,
  };
  render() {
    const { skills, title, desc } = this.props.data;
    return (
      <View className="intro">
        <Skills data={skills} />
        <View className="content">
          <View className="title">{textFormat(title)}</View>
          <View className="desc">{textFormat(desc[0])}</View>
          <View className="desc">{textFormat(desc[1])}</View>
        </View>
      </View>
    );
  }
}
