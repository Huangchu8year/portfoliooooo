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
      description: '为三福品牌定制年轻化商业宣传片，紧扣 “潮流、活力、多元” 的品牌调性，结合校园场景与年轻群体生活片段，展现服饰、配饰、生活好物的时尚搭配与日常实用性。全片节奏轻快、色彩明亮，镜头语言简洁有网感',
      descriptionEn: Customized a youthful commercial video for the Sanfu brand, closely following the brand tone of 'trendy, energetic, and diverse,' combining campus scenes with lifestyle moments of young people, showcasing fashionable combinations and daily practicality of clothing, accessories, and lifestyle goods. The whole video has a lively pace, bright colors, and a simple, internet-friendly visual language.',
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
      description: '聚焦网络热门猫咪梗图，用轻松幽默的旁白、可爱卡通动画与高清实拍画面结合，把专业知识转化为易懂有趣的内容，消解科普的枯燥感。适配短视频平台碎片化观看习惯，兼具娱乐性与知识性',
      descriptionEn: 'Focusing on popular internet cat meme images, combining lighthearted and humorous narration, cute cartoon animations, and high-definition live-action footage, turning professional knowledge into easy-to-understand and interesting content to eliminate the dryness of popular science. Adapted to the fragmented viewing habits of short video platforms, it combines entertainment and educational value.',
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
      description: '聚焦海南椰子传统手工艺人，记录椰雕制作、非遗传承、匠心坚守的真实故事。深入拍摄原料挑选、手工雕刻、打磨成型的全流程，捕捉手艺人的专注细节与生活日常，挖掘非遗技艺背后的文化价值与时代困境。画面质朴治愈，节奏舒缓，用镜头留存传统手艺的温度与生命力。',
      descriptionEn: 'Focusing on traditional coconut craftsmen in Hainan, it documents the real stories of coconut carving, intangible cultural heritage inheritance, and dedication to craftsmanship. The filming goes in-depth into the entire process of selecting raw materials, hand carving, and polishing into shape, capturing the artisans' focused details and daily life, while exploring the cultural value and contemporary challenges behind intangible heritage skills. The visuals are simple and soothing, the pace is gentle, using the lens to preserve the warmth and vitality of traditional craftsmanship.',
      thumbnail: '/portfoliooooo/assets/v3-catmeme.png',
      responsibilities: '采访、拍摄、剪辑、后期',
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
      description: '专访本院保研学姐，围绕其学习经历、保研准备过程、学习方法与成长感悟展开深度对话，真实呈现学姐的努力与收获，传递积极向上的榜样力量，内容有温度、有参考价值。',
      descriptionEn: 'Interview the postgraduate recommendation senior sister of our college, conduct in-depth dialogue around her learning experience, postgraduate recommendation preparation process, learning methods and growth insights, truly present the senior sister's efforts and gains, convey positive and progressive model power, and the content is warm and valuable for reference.',
      thumbnail: '/portfoliooooo/assets/v5-interview.png',
      responsibilities: '策划、拍摄、剪辑、后期',
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
      description: '以屠呦呦先生的科研历程为核心，打造主题微电影，展现其在抗疟研究中的坚守、付出与奉献精神，用细腻的镜头语言传递科研工作者的初心与担当，风格庄重而有感染力。',
      descriptionEn: 'Create a theme microfilm focusing on Mr. Tu Youyou's scientific research process, showing her perseverance, dedication and devotion in anti-malaria research, conveying the original intention and responsibility of scientific researchers through delicate lens language, with a solemn and appealing style.',
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
      description: '以“人格分裂”为创意切入点，运用镜像镜头、快速剪辑与反差画面，展现同一个体内心不同情绪的碰撞与拉扯，风格前卫，充满创意张力，探索人性的多面性。',
      descriptionEn: 'Take "split personality" as the creative starting point, use mirror shots, fast editing and contrast pictures to show the collision and pull of different emotions in the same individual, with an avant-garde style, full of creative tension, exploring the diversity of human nature.',
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
      description: '对于校园热点事件、学术活动的全流程新闻制作，包括采访、拍摄、剪辑与文稿撰写，内容真实客观、信息准确，适配校园多平台发布需求。',
      descriptionEn: 'Campus news report.',
      thumbnail: '/portfoliooooo/assets/v8-news.png',
      responsibilities: '采编、配音、剪辑、后期',
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
      description: '围绕“深度伪造在新闻业中的应用”主题设计信息可视化手册，整体采用简约科技风，通过清晰的图文排版与示意图解，拆解技术原理、应用场景与潜在风险，兼顾专业性与可读性。',
      descriptionEn: 'Design an information visualization handbook around the theme of "the application of deep fake in journalism", adopt a simple and technological style as a whole, explain the technical principles, application scenarios and potential risks through clear graphic typesetting and schematic diagrams, balancing professionalism and readability.',
      thumbnail: '/portfoliooooo/assets/deepfake-handbook.jpg',
      responsibilities: '排版、设计',
      responsibilitiesEn: 'Layout',
      link: import.meta.env.BASE_URL + 'assets/deepfake-handbook.pdf'
    },
    {
      id: 'i01',
      category: 'image',
      type: '专题摄影排版设计',
      typeEn: 'Layout Design',
      title: '平凡之光',
      titleEn: 'Light of the Ordinary',
      description: '以“平凡生活中的温暖瞬间”为主题进行排版设计，采用柔和暖色调与错落式图文布局，搭配生活化素材，营造治愈氛围，注重留白与细节质感，传递“平凡即珍贵”的理念。',
      descriptionEn: 'Conduct layout design with the theme of "warm moments in ordinary life", adopt soft warm colors and scattered graphic layout, match with daily life materials, create a healing atmosphere, pay attention to white space and detailed texture, and convey the concept of "ordinary is precious".',
      thumbnail: '/portfoliooooo/assets/ordinary-light-layout.jpg',
      responsibilities: '设计、排版、拍摄、文案',
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
      description: '为明星相关活动设计收藏级票根，融合明星元素、专属配色与精致排版，兼顾辨识度与收藏价值，细节处理贴合印刷工艺，符合饭圈受众的审美与收藏需求。',
      descriptionEn: 'Design collectible tickets for celebrity-related events, integrate celebrity elements, exclusive color matching and exquisite typesetting, balance recognition and collection value, and the detailed processing is suitable for printing technology, meeting the aesthetic and collection needs of fan circles.',
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
