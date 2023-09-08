import { defineUserConfig } from 'vuepress';
import { recoTheme } from 'vuepress-theme-reco';

// 头部列表模块归类
export const navbar = [
  { text: '主页', link: '/' },
  {
    text: '我的',
    children: [
      {
        text: 'github',
        icon: 'icon如需配置请看下面链接，如不需要请去掉此字段',
        link: 'https://github.com/WedZY',
      },
      { text: '稀土掘金', link: 'https://juejin.cn/user/62036934154445' },
    ],
  },
];

export default defineUserConfig({
  title: '星期三记录屋', // 头部左侧title
  theme: recoTheme({
    home: '/README.md',
    series: {
      // 设置是左侧边栏（sideBar） 还是系列（series）
      '/vuepress-theme-reco/': ['introduce', 'usage'],
    },

    navbar, // 顶部或者左侧导航栏
    author: '星期三', // 作者名字
    authorAvatar: '/avatar.jpg', // 作者头像(静态文件路径 /docs/.vuepress/public)
  }),
});
