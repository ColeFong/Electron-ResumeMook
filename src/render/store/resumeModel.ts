const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: {
    base: {
      avatar: '',
      username: '方同学',
      area: '广东·广州',
      school: '五邑大学',
      major: '电子信息工程',
      degree: '本科',
      hometown: '广东',
      onSchoolTime: {
        beginTime: '2018.09',
        endTime: '2022.06',
      },
    },
    contact: {
      phone: '133****6850',
      email: '1875161218@qq.com',
      github: 'https://github.com/Leon0827',
      juejin: 'https://juejin.cn/user/1170302947568557',
    },
    work: {
      job: '前端工程师',
      city: '广州｜深圳',
      cityList: ['广州', '深圳'],
    },
    hobby: '篮球、爬山、健身、吉他',
    skill:
      '熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码｜阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库｜了解 Chrome，开发组内项目辅助工具 heimdarr-chrome-extension 插件｜了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件｜了解 Electron，了解 Node.js 以及 Git 团队协作开发工具｜了解设计模式，对于特定场景，能采用合适的设计模式进行解决｜了解 MYSQL，了解数据库优化常用方法｜具备良好的网络基础知识',
    skillList: [
      '熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码，开发 rc-redux-model 中间件',
      '阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库',
      '了解 Vscode，开发组内项目辅助工具 vscode-beehive-extension 插件',
      '了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件',
      '了解 Electron，了解 Node.js 以及 Git 团队协作开发工具',
      '了解设计模式，对于特定场景，能采用合适的设计模式进行解决',
      '了解 MYSQL，了解数据库优化常用方法',
    ],
    evaluation:
      '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境|具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
    evaluationList: [
      '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境。',
      '具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
    ],
    certificate: '广州第一届搞笑大赛参与奖',
    certificateList: ['广州第一届搞笑大赛参与奖'],
    schoolExperience: [
      {
        beginTime: '2018.09',
        endTime: '2019.09',
        post: '网络部干事',
        department: '校学生会网络部',
        content:
          '计划、组织、协调各年级学生组织的文艺和文化娱乐活动｜承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
        parseContent: [
          '计划、组织、协调各年级学生组织的文艺和文化娱乐活动',
          '承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
        ],
      },
    ],
    workExperience: [
      {
        beginTime: '2021.08',
        endTime: '2022.02',
        post: '前端开发实习生',
        department: 'Joyy',
        content:
          '担任支付中台前端开发实习生，与Shopline合作，围绕电商研发中心开发多个应用｜任职期间于电商研发中心采用React开发，主导开发各测试平台及内部工具',
        parseContent: [
          '担任支付中台前端开发实习生，与Shopline合作，围绕电商研发中心开发多个应用',
          '任职期间采用React主导开发，主导开发测试平台及内部工具',
        ],
      },
    ],
    projectExperience: [
      {
        beginTime: '2022.02',
        endTime: '2022.02',
        projectName: 'ResumeMook 可视化简历平台',
        post: 'FE',
        content:
          'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版｜通过 JSONFile 方式实现主题换肤，支持导出 PDF 简历文档｜通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
        parseContent: [
          'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版',
          '通过 JSONFile 方式实现主题换肤，支持导出 PDF 简历文档',
          '通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
        ],
        date: 1621145137865,
      },
    ],
  },
};

export default resumeModel;
