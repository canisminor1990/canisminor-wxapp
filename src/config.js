const homeToc = [
  { type: 'profile', text: 'profile', desc: '个人资料与简介' },
  { type: 'edu', text: 'education', desc: '视觉传达系 2009-2013' },
  { type: 'exp', text: 'experience', desc: '工作履历 2013-2017' },
  { type: 'spec', text: 'specialities', desc: '专业能力/跨界涉猎' },
  { type: 'ued', text: 'vd skills', desc: '设计技术栈' },
  { type: 'fe', text: 'fe skills', desc: '前端技术栈' },
  {
    type: 'portfolio',
    text: 'portfolio',
    desc: 'Time to discover some recent projects',
  },
];

const awardList = [
  ['中国美术学院学年奖学金|2009-2010，一等奖学金', '中国美术学院|2009-2010，三好学生/优秀学生干部'],
  ['中国美术学院学年奖学金|2010-2011，一等奖学金', '中国美术学院|2010-2011，三好学生/优秀学生干部'],
  [
    '中国国家奖学金|2012，15/23,000人',
    '中国美术学院学年奖学金|2011-2012，一等奖学金',
    '中国美术学院|2011-2012，三好学生/优秀学生干部',
    'Accepted Works Trierenberg Super Circuit|2012, Acceptance Award',
    'International Photographic Festival|11th Shanghai International|2012, Communication Award',
    'Third BrotherWin Cup|International Originality Design Contest|2012, Excellence Award',
  ],
  [
    '中国浙江省|2013，省优秀毕业生',
    '中国美术学院|2013，校优秀毕业生',
    '中国美术学院|2013，毕业设计金奖',
    '中国美术学院|2013，优秀毕业论文',
  ],
];

const expList = [
  {
    img: 'exp-1',
    color: '#999999',
    title: 'Freelancer, GapYear',
    time: '2013，自由职业者，间隔年',
    desc: '创刊独自杂志『须臾映社 Instant-Zine』发刊24期|http://instant-zine.lofter.com/',
  },
  {
    img: 'exp-2',
    color: '#1CEBA7',
    title: 'Senior UI/UX Designer, Team Leader',
    time: '2014.5 - 2015.11，高级UED设计师，产品线主设',
    desc:
      '就职沪江网，负责沪江学习 · 沪江开心词场 · 沪江小D三条产品线设计|定义沪江UED视觉形象，引入动效工具Origami，建立基于Sketch/Zeplin的设计流水线|其中作为主设改版开心词场5.0：荣获2015年AppStore背词类App第一名',
  },
  {
    img: 'exp-3',
    color: '#FF9800',
    title: 'Co-Founder, UED Director',
    time: '2015.11 - 至今，联合创始人，UED设计总监',
    desc:
      '联合创办熊猫金库，创业初期的全栈设计师至中期的设计管理|产品上线一年达成100亿交易额，获2016年中国最受欢迎互联网金融品牌|将前端技术栈引入UED部门，建立产品自动化UI仓库/React组件库',
  },
];

const specList = [
  {
    img: [{ width: '826', src: 'img/spec-1.png' }],
    desc:
      'XMUED Design Flow，目前熊猫金库UED团队设计流程技术选型，Atomic Design 原子设计模式项目实践，通过Airbnb开源插件react-sketchapp维护及迭代sketch/react/react-native三端组件库，并引入真实数据进行设计。',
    btn: [
      {
        url: 'https://github.com/airbnb/react-sketchapp',
        title: 'See react-sketchapp',
      },
    ],
  },
  {
    img: [{ width: '495', src: 'img/spec-2.png' }],
    desc:
      'Sketch插件开发者，独立开发sketch-name-organizer/sketch-select/sketch-move-half-pixel，均被Sketc官方收录，marketch代码贡献者，阿里sketch插件开发讨论组成员。',
    btn: [
      {
        url:
          'https://github.com/canisminor1990?utf8=%E2%9C%93&tab=repositories&q=sketch&type=&language=',
        title: 'Discover more plugins',
      },
    ],
  },
  {
    img: [
      { width: '324', height: '324', src: 'img/spec-3-1.png' },
      { width: '324', height: '324', src: 'img/spec-3-2.png' },
    ],
    desc:
      'Minecraft第三方开发者，Canisminor Craft 资源包作者，迭代7个大版本，累计32w次下载，2012年设计Minecraft全球最大皮肤站skinme，注册用户破5000万，皮肤库存150万份，日均上传2000份，现已被收购。',
    btn: [
      {
        url: 'https://coding.net/u/canisminor1990/p/CanisminorCraft/git',
        title: 'Canisminor Craft',
      },
      {
        url: 'http://www.skinme.cc/skinme/index/aboutus',
        title: 'Discover SkinMe',
      },
    ],
  },
];

const vdSkillList = [
  {
    title: 'Graphic Design',
    item: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
  },
  {
    title: 'UI / UX',
    item: ['Sketch', 'Figma', 'Origami', 'Framer'],
  },
  {
    title: '3D / Animation',
    item: ['Cinema4D', 'Adobe AfterEffects', 'Live2D'],
  },
];

const feSkillList = [
  { icon: 'webpack', title: 'Webpack' },
  { icon: 'react', title: 'React' },
  { icon: 'vue', title: 'Vue' },
  { icon: 'es6', title: 'ES6' },
  { icon: 'gulp', title: 'Gulp' },
  { icon: 'yarn', title: 'Yarn' },
  { icon: 'makdown', title: 'Markdown' },
  { icon: 'nodeJs', title: 'NodeJS' },
  { icon: 'jekyll', title: 'Jekyll' },
  { icon: 'hexo', title: 'Hexo' },
  { icon: 'sass', title: 'SASS' },
  { icon: 'less', title: 'LESS' },
  { icon: 'postCss', title: 'postCSS' },
];

const gitment = {
  owner: 'canisminor1990',
  repo: 'canisminor',
  oauth: {
    client_id: '2d269c8224f46f260966',
    client_secret: '0cd026bec02b1cd2adb9616d3f2ceba395bcf939',
  },
};

const contactData = [
  ['github', 'canisminor1990', 'https://github.com/canisminor1990'],
  ['coding', 'canisminor1990', 'https://coding.net/u/canisminor1990/project'],
  ['steam', 'canisminor1990', 'http://steamcommunity.com/id/canisminor'],
  ['ns', 'sw-6612-3326-1230', false],
  ['xbox', 'canisminor1990', false],
  ['playstation', 'CanisMinor1990', false],
  ['nga', 'CanisMinor', 'http://bbs.ngacn.cc/read.php?tid=12689516'],
  ['v2ex', 'canisminor', 'https://www.v2ex.com/member/canisminor'],
  ['bilibili', 'Canis_Minor', 'https://space.bilibili.com/410372/#/'],
  ['qq', '40073838', false],
];

export { homeToc, awardList, expList, specList, vdSkillList, feSkillList, contactData, gitment };
