import { View, Image, Text } from '@tarojs/components';
import Taro,{ Component } from '@tarojs/taro';
import moment from 'moment';
import './Article.scss';

export default class extends Component {
	static defaultProps = {
		data: [],
		loading: true
	};

	navigateTo(filename) {
		const url = `/routes/post/index?id=${filename}`
		Taro.navigateTo({url});
	}

  render() {
	  const {data} = this.props;
	  return (
		  <View className="article" >
			  {data.map((item,i) => {
				  let cover = item.cover.s ? item.cover.s : item.cover.l + '!s';
			    return (
				    <View className="box" key={i} onClick={this.navigateTo.bind(this, item.filename)}>
					    <Image src={cover} mode="widthFix"/>
					    <View className="content">
						    <View className="title">{item.title}</View>
						    <View className="desc">{item.desc}</View>
						    <View className="type">{item.tag}<View>{moment(item.date).format('MMM Do, YYYY')}</View></View>
					    </View>
				    </View>
			    )
        })}
		  </View>
	  );
  }
}
