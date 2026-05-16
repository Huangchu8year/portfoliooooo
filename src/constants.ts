import { PortfolioData } from './types';

export const DATA: PortfolioData = {
  hero: {
    name: "汤宇璇 (Tang Yuxuan)",
    positioning: ["新闻学", "二次元内容创作", "视频与视觉设计"],
    positioningEn: ["Journalism", "ACG Content Creation", "Video & Visual Design"],
    subtitle: "",
    subtitleEn: "",
  },

  skills: [
    {
      category: "视频制作",
      categoryEn: "Video Production",
      items: ["PR", "AE", "DaVinci Resolve", "剪映"]
    },
    {
      category: "视觉设计",
      categoryEn: "Visual Design",
      items: ["Photoshop", "SAI", "CSP", "Procreate"]
    },
    {
      category: "新闻传播",
      categoryEn: "Journalism",
      items: ["采访", "策划", "融媒体"]
    },
    {
      category: "二次元生态",
      categoryEn: "ACG Ecosystem",
      items: ["同人企划", "谷圈运营", "IP内容运营"]
    }
  ],

  about: {
    content: "在这里，我既是记录者也是创作者。从新闻现场的冷静观察，到同人圈层的热血创作，我试图将构成主义的理性与包豪斯的实用功能结合。我的作品不仅是视觉的呈现，更是对当代二次元内容生态与传播实践的深度参与。",
    contentEn: "Here, I am both a chronicler and a creator. From cold observations at news sites to passionate creations in fanzine circles, I strive to combine the rationality of Constructivism with the functional utility of Bauhaus. My work is not just a visual presentation, but a deep participation in contemporary ACG content ecology and communication practices.",
  },

  contact: {
    methods: [
      { label: "邮箱 / Email", value: "1280605442@qq.com / 1280605442@gmail.com", icon: "Mail" },
      { label: "微信 / WeChat", value: "AY1280605442", icon: "MessageSquare" },
      { label: "电话 / Phone", value: "18708507010 / 15103067949", icon: "Linkedin" },
    ],
  },

  works: [
    {
      id: 'v1',
      category: 'video',
      subCategory: 'film',
      type: '影视视频剪辑',
      typeEn: 'Film Editing',
      title: '宇宙探索编辑部',
      titleEn: 'Journey to the West',
      description: '经典科幻电影的创意混剪，通过节奏与画面的重新组合展现宇宙探索的浪漫与荒诞。',
      descriptionEn: 'Creative remix of the classic sci-fi film, reimagining the romance and absurdity of space exploration through rhythm and visual composition.',
      thumbnail: '/portfoliooooo/assets/v1-universe.png',
      responsibilities: '素材筛选、剪辑',
      responsibilitiesEn: 'Footage Selection, Editing',
      link: 'https://pan.baidu.com/s/18VnT2niwhLmdddPKsMisbQ?pwd=ikew'
    },
    {
      id: 'v2',
      category: 'video',
      subCategory: 'commercial',
      type: '大广赛宣传片',
      typeEn: 'Advertising Film',
      title: '三福',
      titleEn: 'Sanfu',
      description: '品牌宣传片制作。',
      descriptionEn: 'Brand promotional film.',
      thumbnail: '/portfoliooooo/assets/v2-sanfu.png',
      responsibilities: '团队统筹、导演、拍摄、剪辑',
      responsibilitiesEn: 'Team Coordination, Direction, Filming, Editing',
      link: 'https://pan.baidu.com/s/1hVCIZNuksOapyCn2O3zKhQ?pwd=hscc'
    },
    {
      id: 'v3',
      category: 'video',
      subCategory: 'creative',
      type: '猫meme科普视频',
      typeEn: 'Cat Meme Science',
      title: '猫meme科普',
      titleEn: 'Cat Meme Explainer',
      description: '趣味科普视频。',
      descriptionEn: 'Fun science explainer video.',
      thumbnail: '/portfoliooooo/assets/v4-coconut.png',
      responsibilities: '文案策划、剪辑、配音',
      responsibilitiesEn: 'Scriptwriting, Editing, Voice-over',
      link: 'https://pan.baidu.com/s/1ZkoClMPfZB6UvQHGAEgttg?pwd=ue5a'
    },
    {
      id: 'v4',
      category: 'video',
      subCategory: 'documentary',
      type: '纪录片',
      typeEn: 'Documentary',
      title: '椰影匠心',
      titleEn: 'Coconut Shadow Craftsmanship',
      description: '纪录片作品。',
      descriptionEn: 'Documentary work.',
      thumbnail: '/portfoliooooo/assets/v3-catmeme.png',
      responsibilities: '采访、拍摄、剪辑',
      responsibilitiesEn: 'Interviewing, Filming, Editing',
      link: 'https://pan.baidu.com/s/1rGLUhqER42dBmmtt5GNB9A?pwd=wvsi'
    },
    {
      id: 'v5',
      category: 'video',
      subCategory: 'interview',
      type: '人物专访',
      typeEn: 'Interview',
      title: '人物专访',
      titleEn: 'Portrait Interview',
      description: '人物专访作品。',
      descriptionEn: 'Interview work.',
      thumbnail: '/portfoliooooo/assets/v5-interview.png',
      responsibilities: '策划、采访、拍摄',
      responsibilitiesEn: 'Planning, Interviewing, Filming',
      link: 'https://pan.baidu.com/s/15q19C8ea8AL3UqJ8dbw5EQ?pwd=hk9f'
    },
    {
      id: 'v6',
      category: 'video',
      subCategory: 'shortfilm',
      type: '微电影',
      typeEn: 'Short Film',
      title: '呦呦鹿鸣',
      titleEn: "The Deer's Call",
      description: '微电影作品。',
      descriptionEn: 'Short film.',
      thumbnail: '/portfoliooooo/assets/v6-deer.png',
      responsibilities: '导演、剪辑',
      responsibilitiesEn: 'Directing, Editing',
      link: 'https://pan.baidu.com/s/1QvD4cV6MU7AnGCYE2Rm7Zw?pwd=ujnd'
    },
    {
      id: 'v7',
      category: 'video',
      subCategory: 'creative',
      type: '创意短片',
      typeEn: 'Creative Short',
      title: '精分',
      titleEn: 'Split',
      description: '创意短片。',
      descriptionEn: 'Creative short film.',
      thumbnail: '/portfoliooooo/assets/v7-split.png',
      responsibilities: '拍摄、剪辑',
      responsibilitiesEn: 'Filming, Editing',
      link: 'https://pan.baidu.com/s/1u6ssPSDb1KyEjLuA2l5X_Q?pwd=udth'
    },
    {
      id: 'v8',
      category: 'video',
      subCategory: 'news',
      type: '新闻报道',
      typeEn: 'News Report',
      title: '学院新闻',
      titleEn: 'School News',
      description: '校园新闻报道。',
      descriptionEn: 'Campus news report.',
      thumbnail: '/portfoliooooo/assets/v8-news.png',
      responsibilities: '采编',
      responsibilitiesEn: 'Editing',
      link: 'https://pan.baidu.com/s/1MWMVwHPeejsnUM4bUtzfJw?pwd=u6kn'
    },

    {
      id: 'i0',
      category: 'image',
      type: '手册设计',
      typeEn: 'Handbook Design',
      title: 'Deep Fake',
      titleEn: 'Deep Fake',
      description: '设计作品。',
      descriptionEn: 'Design work.',
      thumbnail: '/portfoliooooo/assets/deepfake-handbook.jpg',
      responsibilities: '排版',
      responsibilitiesEn: 'Layout',
      link: import.meta.env.BASE_URL + 'assets/deepfake-handbook.pdf'
    },
    {
      id: 'i01',
      category: 'image',
      type: '排版设计',
      typeEn: 'Layout Design',
      title: '平凡之光',
      titleEn: 'Light of the Ordinary',
      description: '排版设计作品。',
      descriptionEn: 'Layout design work.',
      thumbnail: '/portfoliooooo/assets/ordinary-light-layout.jpg',
      responsibilities: '设计',
      responsibilitiesEn: 'Design',
      link: import.meta.env.BASE_URL + 'assets/ordinary-light-layout.pdf'
    },
    {
      id: 'i02',
      category: 'image',
      type: '票根设计',
      typeEn: 'Ticket Design',
      title: '明星票根设计',
      titleEn: 'Celebrity Ticket Design',
      description: '票根设计作品。',
      descriptionEn: 'Ticket design work.',
      thumbnail: '/portfoliooooo/assets/star-ticket-design.jpg',
      responsibilities: '设计',
      responsibilitiesEn: 'Design',
      link: import.meta.env.BASE_URL + 'assets/star-ticket-design.pdf'
    }
  ],

  experiences: [
    {
      id: 'e1',
      title: '漫展摊主经历',
      titleEn: 'Comic-con Booth Owner',
      role: '主创/负责人',
      roleEn: 'Main Creator/Manager',
      period: '2023 - 2024',
      description: '同人创作与漫展运营经验。',
      descriptionEn: 'Fan creation and booth experience.'
    }
  ]
};
