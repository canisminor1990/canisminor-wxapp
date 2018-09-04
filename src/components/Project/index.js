import { View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import classNames from 'classnames';
import './index.scss';

export default class extends Component {
  render() {
    const { data, num, className } = this.props;
    let number = (num + 1).toString();
    number = number.length < 2 ? `0${number}` : number;
    return (
      <View
        className={classNames('cover', className)}
        hoverClass="cover-hover"
        style={{ backgroundImage: `url(${data.cover})` }}
      >
        <View className="mask" />
        <View className="split" />
        <View className="num">{number}</View>
        <View className="content">
          <View className="title">{data.title}</View>
          <View className="type">{data.type.toUpperCase()}</View>
        </View>
      </View>
    );
  }
}
