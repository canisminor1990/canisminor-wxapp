import { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import moment from 'moment';
import { Loading, Card, Markdown } from '../../components';
import action from '../../utils/action';
import './index.scss';

@connect(({ posts, loading }) => ({
  ...posts,
  loading: loading.effects['posts/get'],
}))
export default class extends Component {
  static defaultProps = {
    title: '',
    desc: '',
    tag: '',
    body: '',
    cover: {
      s: false,
      m: false,
      l: '',
    },
    date: '',
    loading: true,
  };

  config = {
    navigationBarTitleText: '',
    backgroundColor: '#ffffff',
  };

  componentDidMount = () => {
    const { id } = this.$router.params;
    this.props.dispatch(action('posts/get', id));
    this.setState({ id });
  };

  onShareAppMessage = () => {
    const { title, tag, cover } = this.props;
    return {
      title: `${title} - ${tag.toUpperCase()}`,
      path: `/routes/post/index?id=${this.state.id}`,
      imageUrl: cover.l ? `${cover.l}!wxshare` : `${cover.s}!wxshare`,
    };
  };

  render() {
    const { title, desc, tag, body, cover, date, loading } = this.props;
    return (
      <View className="post">
        {loading ? (
          <Loading />
        ) : (
          <View>
            <View className="header">
              <View className="title">{title}</View>
              <View className="tag">{tag.toUpperCase()}</View>
              <View className="desc">{desc}</View>
            </View>
            <Image lazyLoad className="cover" src={cover.l} mode="widthFix" />
            <Card padding>
              <View className="markdown">
                <Markdown md={body} />
              </View>
              <View className="date">{moment(date).format('MMM Do, YYYY')}</View>
            </Card>
          </View>
        )}
        <View className="footer">
          <Image
            lazyLoad
            className="avatar"
            src="https://canisminor.cc/img/canisminor.jpg"
            mode="widthFix"
          />
          <View className="name">CanisMinor</View>
        </View>
      </View>
    );
  }
}
