import { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { Loading } from '../../components';
import action from '../../utils/action';
import Instant from '../../utils/instant';
import Intro from './Intro';
import Book from './Book';
import './post.scss';

@connect(({ instantzine, loading }) => ({
  ...instantzine,
  loading: loading.effects['instantzine/get'],
}))
export default class extends Component {
  static defaultProps = {
    intro: '',
    books: [],
    loading: true,
  };

  state = {
    type: '',
    value: 0,
  };

  config = {
    navigationBarTitleText: 'Instant Zine',
    backgroundColor: '#ffffff',
  };

  onShareAppMessage = () => {
    if (this.state.type === 'intro') {
      return {
        title: 'Intro - InstantZine',
        path: '/routes/instant/post?type=intro',
        imageUrl: `${Instant.videoCover}!wxshare`,
      };
    }
    if (this.state.type === 'issue') {
      return {
        title: `${this.state.title} - InstantZine`,
        path: `/routes/instant/post?type=issue&value=${this.state.value}`,
        imageUrl: this.state.imageUrl,
      };
    }
  };

  componentDidMount = () => {
    this.props.dispatch(action('instantzine/get'));
    const { type, value } = this.$router.params;
    this.setState({ type, value });
  };

  render() {
    const { loading, books, intro } = this.props;
    const { type, value } = this.state;
    let book;
    if (type === 'issue') {
      book = books[parseInt(value)];
      this.setState({
        title: book.title[0],
        imageUrl: Instant.cover(book.num) + '!wxshare',
      });
    }
    return (
      <View className="instant-post">
        {loading ? <Loading /> : null}
        {!loading && type === 'intro' ? <Intro data={intro} /> : null}
        {!loading && type === 'issue' ? <Book data={book} /> : null}

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
