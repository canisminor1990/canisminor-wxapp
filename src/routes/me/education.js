import { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { WhiteSpace, Loading, Card, Cell, Iconfont } from '../../components';
import action from '../../utils/action';
import './education.scss';

@connect(({ resume, loading }) => ({
  education: resume.education,
  loading: loading.effects['resume/get'],
}))
export default class extends Component {
  static defaultProps = {
    education: {
      awardList: [],
      showcase: [],
    },
    loading: true,
  };

  config = {
    navigationBarTitleText: 'Education',
  };

  componentDidMount = () => {
    this.props.dispatch(action('resume/get'));
  };

  onShareAppMessage = () => {
    return {
      title: 'Education - Resume',
      path: 'routes/me/education',
      imageUrl: '/asset/share-projects.png',
    };
  };

  render() {
    const { loading, education } = this.props;
    return (
      <View className="education view">
        <Card>
          <View className="header">
            <Image
              className="school"
              src="https://canisminor.cc/img/resume-education-caa.png"
              mode="widthFix"
              lazyLoad
            />
          </View>
          {loading ? (
            <Loading />
          ) : (
            education.showcase.map((item, i) => (
              <Cell
                key={i}
                title={item.title.toUpperCase()}
                desc={item.desc}
                noline={i === education.showcase.length - 1}
              />
            ))
          )}
        </Card>
        <WhiteSpace />
        <Card title="Awards" padding>
          {loading ? (
            <Loading />
          ) : (
            education.awardList.map((items, a) => (
              <View key={a} className="awards">
                {items.map((item, b) => {
                  const award = item.split(/\|/g);
                  return (
                    <View key={b} className="award">
                      <Iconfont type={b > 0 ? 'point' : 'point-main'} />
                      <View className="item">
                        {award.map((i, c) => (
                          <View key={c}>{i}</View>
                        ))}
                      </View>
                    </View>
                  );
                })}
              </View>
            ))
          )}
        </Card>
        <WhiteSpace footer />
      </View>
    );
  }
}
