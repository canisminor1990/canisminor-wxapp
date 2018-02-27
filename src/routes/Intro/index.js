import { wx, connect } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'CanisMinor' });
  },
  handleShow: function() {
    this.setData({ showView: false });
  },
};

const mapState = ({ app, data, loading }) => {
  return {
    showView: true,
    title: {
      title: 'CanisMinor',
      desc: 'UI / UX Designer & FE Developer',
    },
    showcase_1: [
      { title: 'born:', desc: '1990.9.30' },
      { title: 'mobile:', desc: '153-0585-3008' },
      { title: 'e-mail:', desc: 'i@canisminor.cc' },
    ],
    showcase_2: [
      { title: 'MAJOR:', desc: 'Visual Design' },
      { title: 'DUR:', desc: '2009 » 13' },
      { title: 'GPA:', desc: '3.58/4' },
    ],
    introduction:
      '现居北京，UED全栈设计师，毕业于CAA中国美术学院09级视觉传达。>5年从业经验，专注于 Design » Code 设计流程管理和UI原子设计模式(Atomic Design)及自动化设计，具备流行前端技术栈React/Vue，阿里开源项目重度用户Antd/Dva/Roadhog，Sketch第三方插件作者。',
    ...app,
    ...data,
    loading,
  };
};

Page(connect(mapState)(page));
