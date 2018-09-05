import { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import QueryString from 'query-string';
import action from '../../utils/action';
import { WhiteSpace, Loading, Card } from '../../components';
import './specialities.scss';

@connect(({ resume, loading }) => ({
  specialities: resume.specialities,
  loading: loading.effects['resume/get'],
}))
export default class extends Component {
  static defaultProps = {
    specialities: [],
    loading: true,
  };

  config = {
    navigationBarTitleText: 'Specialities',
  };

  componentDidMount = () => {
    this.props.dispatch(action('resume/get'));
  };

  onShareAppMessage = () => {
    return {
      title: 'Specialities - Resume',
      path: 'routes/me/specialities',
      imageUrl: '/asset/share-projects.png',
    };
  };

  render() {
    const { loading, specialities } = this.props;
    return (
      <View className="specialities">
        {loading ? (
          <Loading />
        ) : (
          specialities.map((item, i) => {
            const to =
              item.button.href === '/projects/instant-zine'
                ? `/routes/instant/index`
                : `/routes/qrcode/index?${QueryString.stringify({
                    url: item.button.href,
                    title: item.button.title,
                  })}`;

            return (
              <View key={i}>
                <Card btn={item.button.title} to={to} padding>
                  <View className="spec">
                    <Image src={`https://canisminor.cc${item.img}`} mode="widthFix" lazyLoad />
                    <View className="desc">{item.desc}</View>
                  </View>
                </Card>
                <WhiteSpace footer />
              </View>
            );
          })
        )}
      </View>
    );
  }
}
