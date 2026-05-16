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
      descriptionEn: "Creative remix of the classic sci-fi film, reimagining the romance and absurdity of space exploration through rhythm and visual composition.",
      thumbnail: '/portfoliooooo/assets/v1-universe.png',
      responsibilities: '素材筛选、剪辑',
      responsibilitiesEn: "Footage Selection, Editing",
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
      description: '为三福品牌定制年轻化商业宣传片，紧扣 “潮流、活力、多元” 的品牌调性，结合校园场景与年轻群体生活片段，展现服饰、配饰、生活好物的时尚搭配与日常实用性。全片节奏轻快、色彩明亮，镜头语言简洁有网感',
      descriptionEn: "Customized a youthful commercial video for the Sanfu brand, closely following the brand tone of 'trendy, energetic, and diverse,' combining campus scenes with lifestyle moments of young people, showcasing fashionable combinations and daily practicality of clothing, accessories, and lifestyle goods. The whole video has a lively pace, bright colors, and a simple, internet-friendly visual language.",
      thumbnail: '/portfoliooooo/assets/v2-sanfu.png',
      responsibilities: '团队统筹、导演、拍摄、剪辑',
      responsibilitiesEn: "Team Coordination, Direction, Filming, Editing",
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
      description: '聚焦网络热门猫咪梗图，用轻松幽默的旁白、可爱卡通动画与高清实拍画面结合，把专业知识转化为易懂有趣的内容，消解科普的枯燥感。适配短视频平台碎片化观看习惯，兼具娱乐性与知识性',
      descriptionEn: "Focusing on popular internet cat meme images, combining lighthearted and humorous narration, cute cartoon animations, and high-definition live-action footage, turning professional knowledge into easy-to-understand and interesting content. Adapted to fragmented viewing habits of short video platforms, combining entertainment and educational value.",
      thumbnail: '/portfoliooooo/assets/v4-coconut.png',
      responsibilities: '文案策划、剪辑、配音',
      responsibilitiesEn: "Scriptwriting, Editing, Voice-over",
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
      description: '聚焦海南椰子传统手工艺人，记录椰雕制作、非遗传承、匠心坚守的真实故事。深入拍摄原料挑选、手工雕刻、打磨成型的全流程，捕捉手艺人的专注细节与生活日常，挖掘非遗技艺背后的文化价值与时代困境。画面质朴治愈，节奏舒缓，用镜头留存传统手艺的温度与生命力。',
      descriptionEn: "Focusing on traditional coconut craftsmen in Hainan, it documents the real stories of coconut carving, intangible cultural heritage inheritance, and dedication to craftsmanship. The filming goes in-depth into the entire process of selecting raw materials, hand carving, and polishing into shape, capturing the artisans' focused details and daily life, while exploring the cultural value and contemporary challenges behind intangible heritage skills. The visuals are simple and soothing, the pace is gentle, preserving the warmth and vitality of traditional craftsmanship.",
      thumbnail: '/portfoliooooo/assets/v3-catmeme.png',
      responsibilities: '采访、拍摄、剪辑、后期',
      responsibilitiesEn: "Interviewing, Filming, Editing",
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
      description: '专访本院保研学姐，围绕其学习经历、保研准备过程、学习方法与成长感悟展开深度对话，真实呈现学姐的努力与收获，传递积极向上的榜样力量，内容有温度、有参考价值。',
      descriptionEn: "Interview the postgraduate recommendation senior student of our college, conducting in-depth dialogue around her learning experience, preparation process, study methods and growth insights, truly presenting her efforts and gains, and conveying a positive role model spirit.",
      thumbnail: '/portfoliooooo/assets/v5-interview.png',
      responsibilities: '策划、拍摄、剪辑、后期',
      responsibilitiesEn: "Planning, Interviewing, Filming",
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
      description: '以屠呦呦先生的科研历程为核心，打造主题微电影，展现其在抗疟研究中的坚守、付出与奉献精神，用细腻的镜头语言传递科研工作者的初心与担当，风格庄重而有感染力。',
      descriptionEn: "Create a short film focusing on Tu Youyou's scientific research journey, showing perseverance and dedication in anti-malaria research, conveying the spirit of researchers through cinematic storytelling.",
      thumbnail: '/portfoliooooo/assets/v6-deer.png',
      responsibilities: '导演、剪辑',
      responsibilitiesEn: "Directing, Editing",
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
      description: '以“人格分裂”为创意切入点，运用镜像镜头、快速剪辑与反差画面，展现同一个体内心不同情绪的碰撞与拉扯，风格前卫，充满创意张力。',
      descriptionEn: "Using split personality as the concept, the film explores emotional conflict through mirror shots and fast editing.",
      thumbnail: '/portfoliooooo/assets/v7-split.png',
      responsibilities: '拍摄、剪辑',
      responsibilitiesEn: "Filming, Editing",
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
      description: '校园新闻制作与报道。',
      descriptionEn: "Campus news reporting and production.",
      thumbnail: '/portfoliooooo/assets/v8-news.png',
      responsibilities: '采编、配音、剪辑、后期',
      responsibilitiesEn: "Editing",
      link: 'https://pan.baidu.com/s/1MWMVwHPeejsnUM4bUtzfJw?pwd=u6kn'
    },

    {
      id: 'i0',
      category: 'image',
      type: '手册设计',
      typeEn: 'Handbook Design',
      title: 'Deep Fake',
      titleEn: 'Deep Fake',
      description: '围绕“深度伪造在新闻业中的应用”主题设计信息可视化手册。',
      descriptionEn: "Design an information visualization handbook about deepfake in journalism.",
      thumbnail: '/portfoliooooo/assets/deepfake-handbook.jpg',
      responsibilities: '排版、设计',
      responsibilitiesEn: "Layout",
      link: import.meta.env.BASE_URL + 'assets/deepfake-handbook.pdf'
    },

    {
      id: 'i01',
      category: 'image',
      type: '专题摄影排版设计',
      typeEn: 'Layout Design',
      title: '平凡之光',
      titleEn: 'Light of the Ordinary',
      description: '以“平凡生活中的温暖瞬间”为主题进行排版设计。',
      descriptionEn: "Layout design about warmth in ordinary life.",
      thumbnail: '/portfoliooooo/assets/ordinary-light-layout.jpg',
      responsibilities: '设计、排版、拍摄、文案',
      responsibilitiesEn: "Design and layout",
      link: import.meta.env.BASE_URL + 'assets/ordinary-light-layout.pdf'
    },

    {
      id: 'i02',
      category: 'image',
      type: '票根设计',
      typeEn: 'Ticket Design',
      title: '明星票根设计',
      titleEn: 'Celebrity Ticket Design',
      description: '为明星活动设计收藏级票根。',
      descriptionEn: "Collectible ticket design for celebrity events.",
      thumbnail: '/portfoliooooo/assets/star-ticket-design.jpg',
      responsibilities: '设计',
      responsibilitiesEn: "Design",
      link: import.meta.env.BASE_URL + 'assets/star-ticket-design.pdf'
    }
  ],
 id: 'i1',
      category: 'image',
      type: '商业宣传海报设计',
      typeEn: 'Commercial Poster Design',
      title: '爱华仕',
      titleEn: 'OIWAS',
      description: '为爱华仕品牌设计的创意广告海报，展现年轻活力的旅行主题。',
      descriptionEn: 'Creative advertisement poster for OIWAS brand, showcasing youthful travel theme.',
      thumbnail: '/assets/aihuashi-poster.png',
      responsibilities: '海报设计',
      responsibilitiesEn: 'Poster Design',
      link: '#'
    },
    {
      id: 'i2',
      category: 'image',
      type: '节日海报设计',
      typeEn: 'Festival Poster Design',
      title: '国家宪法日',
      titleEn: 'Constitution Day',
      description: '国家宪法日宣传海报设计，融合传统与现代元素。',
      descriptionEn: 'Constitution Day promotional poster design, blending traditional and modern elements.',
      thumbnail: '/assets/constitution-day.jpg',
      responsibilities: '海报设计',
      responsibilitiesEn: 'Poster Design',
      link: '#'
    },
    {
      id: 'i3',
      category: 'image',
      type: '节日海报设计',
      typeEn: 'Festival Poster Design',
      title: '中秋节',
      titleEn: 'Mid-Autumn',
      description: '中秋节节日海报，采用剪纸风格的传统美学设计。',
      descriptionEn: 'Mid-Autumn Festival poster with traditional paper-cut aesthetic design.',
      thumbnail: '/assets/mid-autumn.png',
      responsibilities: '海报设计',
      responsibilitiesEn: 'Poster Design',
      link: '#'
    },
    {
      id: 'd1',
      category: 'digital',
      type: 'Q版表情包网站',
      typeEn: 'Chibi Sticker Site',
      title: 'Q版表情包创作',
      titleEn: 'Chibi Emoji Creation',
      description: '二次元同人表情包展示网站，10款原创Q版角色表情，支持点击放大预览。',
      descriptionEn: 'ACG fan-made emoji showcase site featuring 10 original chibi character stickers with click-to-enlarge preview.',
      thumbnail: '/assets/moe-awakening.png',
      responsibilities: '表情包原创绘制、UI设计、前端开发',
      responsibilitiesEn: 'Original Sticker Illustration, UI Design, Frontend Development',
      link: 'https://huangchu8year.github.io/-/#showcase'
    },
    {
      id: 'd2',
      category: 'digital',
      type: '数据新闻网站',
      typeEn: 'Data Journalism Site',
      title: '航天小镇蝶变',
      titleEn: 'Aerospace Town Transformation',
      description: '海南文昌航天产业七年数据可视化平台，展示GDP、旅游收入、民宿数量等关键指标趋势。',
      descriptionEn: 'Seven-year data visualization platform for Hainan Wenchang aerospace industry, displaying GDP, tourism revenue, homestay trends.',
      thumbnail: '/assets/merch-circle.png',
      responsibilities: '数据可视化设计、前端开发',
      responsibilitiesEn: 'Data Visualization Design, Frontend Development',
      link: 'https://5x6qjky6jit7q.ok.kimi.link/data.html'
    },
    {
      id: 'd3',
      category: 'digital',
      type: '专题摄影网站',
      typeEn: 'Photo Story Site',
      title: '平凡铸伟大',
      titleEn: 'Ordinary Heroes',
      description: '致敬平凡岗位坚守者的专题摄影网站，记录保安、保洁、手工艺人等普通人的日常故事。',
      descriptionEn: 'Photo story site honoring ordinary workers—security guards, cleaners, craftsmen—documenting their daily stories.',
      thumbnail: '/assets/ordinary-heroes.png',
      responsibilities: '摄影、排版设计、前端开发',
      responsibilitiesEn: 'Photography, Layout Design, Frontend Development',
      link: 'https://huangchu8year.github.io/ordinary-heroes/'
    }

  experiences: [
    {
      id: 'e1',
      title: '漫展摊主经历',
      titleEn: 'Comic-con Booth Owner',
      role: '主创/负责人',
      roleEn: 'Main Creator/Manager',
      period: '2023 - 2024',
      description: '同人创作与漫展运营经验。',
      descriptionEn: "Fan creation and booth experience."
    }
  ]
};
