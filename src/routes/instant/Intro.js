import { View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { Card, Markdown } from '../../components';
import './Intro.scss';

export default class extends Component {
  static defaultProps = {
    data: {
      title: '',
      tag: '',
      body: '',
    },
  };

  render() {
    const { data } = this.props;
    return (
      <View className="intro">
        <View className="header">
          <View className="title">{data.title}</View>
          <View className="tag">{data.tag}</View>
        </View>
        <Card padding>
          <View className="markdown">
            <Markdown md={data.body} />
          </View>
          <View className="date">24 pages / 200 x 270 mm</View>
        </Card>
      </View>
    );
  }
}
