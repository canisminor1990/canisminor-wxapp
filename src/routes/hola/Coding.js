import { View, Image } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import QueryString from 'query-string';
import './Coding.scss';

export default class extends Component {
  static defaultProps = {
    data: [],
    loading: true,
  };

  navigateTo(props) {
    const url = `/routes/qrcode/index?${props}`;
    Taro.navigateTo({ url });
  }

  render() {
    const { data } = this.props;
    return (
      <View className="coding">
        {data.map((item, i) => {
          const url = QueryString.stringify({
            url: item.href,
            title: item.title,
          });
          return (
            <View
              className="box"
              hoverClass="box-hover"
              key={i}
              onClick={this.navigateTo.bind(this, url)}
            >
              <Image lazyLoad src={`https://canisminor.cc${item.cover}`} mode="widthFix" />
              <View className="content">
                <View className="title">{item.title}</View>
                <View className="desc">{item.desc}</View>
                <View className="type">{item.type}</View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
