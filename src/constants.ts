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

      // ✅ 已修复这里（关键错误）
      descriptionEn: 'Customized a youthful commercial video for the Sanfu brand, closely following the brand tone of "trendy, energetic, and diverse," combining campus scenes with lifestyle moments of young people, showcasing fashionable combinations and daily practicality of clothing, accessories, and lifestyle goods. The whole video has a lively pace, bright colors, and a simple, internet-friendly visual language.',

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
    }
  ]
};
