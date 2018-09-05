import { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { WhiteSpace, Loading, Card, Skills, Tools } from '../../components';
import action from '../../utils/action';
import './fe.scss';

@connect(({ resume, loading }) => ({
  feskills: resume.feskills,
  loading: loading.effects['resume/get'],
}))
export default class extends Component {
  static defaultProps = {
    feskills: {
      main: [],
      tools: [],
    },
    loading: true,
  };

  config = {
    navigationBarTitleText: 'Front-End Skills',
  };

  componentDidMount = () => {
    this.props.dispatch(action('resume/get'));
  };

  onShareAppMessage = () => {
    return {
      title: 'Front-End Skills - Resume',
      path: 'routes/me/fe',
      imageUrl: '/asset/share-projects.png',
    };
  };

  render() {
    const { loading, feskills } = this.props;
    return (
      <View className="design">
        <Card padding>{loading ? <Loading /> : <Skills data={feskills.main} />}</Card>
        <WhiteSpace />
        <Card title="Knowledge Map">
          <View className="list">
            {loading ? <Loading /> : feskills.tools.map((item, i) => <Tools data={item} key={i} />)}
          </View>
        </Card>
        <WhiteSpace footer />
      </View>
    );
  }
}
