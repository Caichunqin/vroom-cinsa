/* eslint-disable prettier/prettier */
export default {
  header: {
    companyName: '广东省计算机信息网络安全协会',
    companyDesc: '协会成立于1999年7月，是全国首家信息网络安全专业协会。',
    shortVideo: {
      url:
        'https://2726-cn-north-4.cdn-vod.huaweicloud.com/asset/23aad56459325f2259834ae22b2369ca/0fa7d7d1392755a7786a4c18cf046736.mp4',
      type: 'video/mp4',
    },
    originVideo: {
      url:
        'https://2726-cn-north-4.cdn-vod.huaweicloud.com/asset/72758ed68e9a45ab89dcfdc2dcf6b0ab/2de3ed173c5b8387aa1b9ca3d8c0a222.mp4',
      type: 'video/mp4',
    },
    // logo 反白 480 x 120 透明底 png
    logoWhiteUrl: require('@/assets/imgs/logo.png'),
    // logo 彩色 480 x 120 透明底 png（本页面不需要，但要提供，用于网安周官网的企业虚拟展二级页面使用）
    logoColorUrl: require('@/assets/imgs/logos.png'),
  },
  news: {
    title: '资讯',
    'title-en': 'NEWS',
    list: [
      {
        title: '广东省网络安全应急响应中心教育分中心成立',
        desc: '成立大会精彩回顾',
        date: '2020-07-24',
        // 480 x 320
        picUrl: require('@/assets/imgs/p1-480x320.jpg'),
        link: 'https://mp.weixin.qq.com/s/IY0LigVUxRYMsN3eLfjsJQ',
        linkPc: 'http://www.cinsa.org.cn/2020/0824/c10280a395224/page.htm',
      },
      {
        title: '致敬时代 | 第三届“红帽杯”网络安全攻防大赛总决赛圆满落幕',
        desc: '网络空间的竞争，归根到底是人才的竞争',
        date: '2019-11-28',
        picUrl: require('@/assets/imgs/p2-480x320.jpg'),
        link: 'https://mp.weixin.qq.com/s/l3w_GAONF9_E5c3ah-TGcA',
        linkPc: 'http://www.cinsa.org.cn/2019/1128/c10280a353908/page.htm',
      },
      {
        title: '粤网安协会在网络安全周主办等保2.0贯彻论坛',
        desc:
          '【聚焦等保2.0】协会在第六届广东省网络安全宣传周网络安全博览会主办等保2.0贯彻实施论坛',
        date: '2019-09-19',
        picUrl: require('@/assets/imgs/p3-480x320.jpg'),
        link: 'https://mp.weixin.qq.com/s/FobbeYJ8lwyop4i9jbhicA',
        linkPc: 'http://www.cinsa.org.cn/2019/0919/c10280a334804/page.htm',
      },
      {
        title:
          '"无限网络正气，廿载家国情怀"协会二十周年庆典活动暨粤港澳网络空间安全高峰论坛在广州成功举办',
        desc: '协会20周年庆典活动回顾',
        date: '2019-07-16',
        picUrl: require('@/assets/imgs/p4-480x320.jpg'),
        link: 'https://mp.weixin.qq.com/s/6Lk6T0saMBoFENGpPpPagQ',
        linkPc: 'http://www.cinsa.org.cn/2019/0716/c10280a328647/page.htm',
      },
      {
        title: '广东启动网络安全应急响应平台',
        desc: '广东省网络安全应急响应平台和7×24小时网络安全应急响应工作机制',
        date: '2016-12-26',
        // 480 x 320
        picUrl: require('@/assets/imgs/p5-480x320.jpg'),
        link: 'https://www.mps.gov.cn/n2255079/n4242954/n4841045/n4841055/c5582537/content.html',
        linkPc: 'https://www.mps.gov.cn/n2255079/n4242954/n4841045/n4841055/c5582537/content.html',
      },
    ],
  },
  pictures: {
    title: '图片',
    'title-en': 'PICTURES',
    list: [
      {
        picUrl: require('@/assets/imgs/P3-564x376.jpg'),
      },
      {
        picUrl: require('@/assets/imgs/P7-564x376.png'),
      },
      {
        picUrl: require('@/assets/imgs/P4-564x376.jpg'),
      },
      {
        picUrl: require('@/assets/imgs/P1-564x376.jpg'),
      },
      {
        picUrl: require('@/assets/imgs/P6-564x376.jpg'),
      },
      {
        picUrl: require('@/assets/imgs/P5-564x376.jpg'),
      },
      {
        picUrl: require('@/assets/imgs/P8-564x376.jpg'),
      },
      {
        picUrl: require('@/assets/imgs/P2-564x376.jpg'),
      },
    ],
  },
  videos: {
    title: '视频',
    'title-en': 'VIDEOS',
    list: [
      {
        title: '协会参展2019网络安全博览会',
        time: '00:02:42',
        picUrl: require('@/assets/imgs/p4-660x380.jpg'),
        video: {
          url:
            'https://2726-cn-north-4.cdn-vod.huaweicloud.com/asset/2dd7669158dc0dfac643d95cce1c1589/8efb3e15281d359488f144e2bbc5fcb4.mp4',
          type: 'video/mp4',
        },
      },
      {
        title: '广东省网络安全应急响应中心教育分中心成立大会',
        time: '00:01:20',
        picUrl: require('@/assets/imgs/p2-660x380.png'),
        video: {
          url:
            'https://2726-cn-north-4.cdn-vod.huaweicloud.com/asset/5738b1da39adce5fef2db8b8ebad9ded/a68f8ead0bc8b08097ff2c5fd2783eb9.m4v',
          type: 'video/mp4',
        },
      },
      {
        title: '广东省网络安全应急响应中心',
        time: '00:02:43',
        picUrl: require('@/assets/imgs/p3-660x380.png'),
        video: {
          url:
            'https://2726-cn-north-4.cdn-vod.huaweicloud.com/asset/71c7431469cba8b54ab229ecdbeee551/659632c2ffe9d743c22abe824bba9e47.mov',
          type: 'video/mp4',
        },
      },
      {
        title: '第一届&第二届红帽杯网络安全攻防大赛宣传视频',
        time: '00:07:05',
        // 660 x 380
        picUrl: require('@/assets/imgs/p1-660x380.jpg'),
        video: {
          url:
            'https://2726-cn-north-4.cdn-vod.huaweicloud.com/asset/72758ed68e9a45ab89dcfdc2dcf6b0ab/2de3ed173c5b8387aa1b9ca3d8c0a222.mp4',
          type: 'video/mp4',
        },
      },
    ],
  },
  about: {
    introduction: [
      '广东省计算机信息网络安全协会(下称协会）成立于1999年7月，是全国首家信息网络安全专业协会，由广东省公安厅主管、省公安厅网络警察总队指导、在广东省民政厅登记注册的社会团体，属非营利性专业协会。在社会各界的鼎力支持下，目前会员遍及IT行业、行政机关、银行、电信、教育、电力、交通、医疗卫生等各个领域。',
      '协会下设有网络安全应急响应中心、校园网络安全专业委员会、医疗行业专业委员会、信息系统安全等级保护测评专业委员会、红帽先锋人才培养专业委员会、电力专业委员会、信息安全培训中心、信息安全服务中心、安全技术专家委员会等相关机构。协会组织全国优质网络安全技术资源，拥有由数十名来自政府机关、科研机构、高等院校等部门组成的经验丰富的专业技术队伍。',
    ],
    booths: [
      {
        title: '“无限网络正气，廿载家国情怀”——协会二十周年庆典活动',
        picUrl: require('@/assets/imgs/P1-1200x600.png'),
        type: 'image',
      },
      {
        title: '2019年协会成功主办第三届红帽杯网络安全攻防大赛',
        picUrl: require('@/assets/imgs/P2-1200x600.png'),
        type: 'image',
      },
      {
        title:
          '公安部十一局陈飞燕副巡视员及其随同人员到广东省网络安全应急响应中心进行视察指导工作',
        picUrl: require('@/assets/imgs/P3-1200x600.jpg'),
        type: 'image',
      },
      {
        title:
          '广东省公安厅党委委员、副厅长孙太平，原省网警总队总队长石磊、总队副总队长马文强等领导相继莅临协会展位参观交流',
        picUrl: require('@/assets/imgs/P4-1200x600.jpg'),
        type: 'image',
      },
      {
        title:
          '应急响应中心获由公安部网络安全保卫局授予的“国家重大活动网络安全保卫——优秀技术支持单位”称号',
        picUrl: require('@/assets/imgs/P5-1200x600.jpg'),
        type: 'image',
      },
    ],
  },
}
