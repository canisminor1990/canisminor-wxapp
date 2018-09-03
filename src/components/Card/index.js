import { View, Text } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import './index.scss';

export default class extends Component {
  render() {
    const { title, btn, padding } = this.props;
    const s = {
      padding: '1rem',
    };
    return (
      <View className="card">
        {title ? <View className="header">{title}</View> : null}
        <View className="body" style={padding ? s : null}>
          {this.props.children}
        </View>
        {btn ? <View className="footer">{btn}</View> : null}
      </View>
    );
  }
}
