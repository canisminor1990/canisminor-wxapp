import { View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import classNames from 'classnames'
import './index.scss';

export default class extends Component {
  render() {
    const { data,className } = this.props;
    return (
	    <View className={classNames('cover',className)}  style={{ backgroundImage: `url(${data.cover})` }}>
		    <View className="content">
			    <View className="title">{data.title}</View>
			    <View className="type">{data.type.toUpperCase()}</View>
		    </View>
	    </View>
    );
  }
}
