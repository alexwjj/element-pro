
const plugins = require('./plugins.js');
const path = require("path");

module.exports = {
  theme: "",
  title: "ElementPro",
  description: "基于ElementUI + Vue2.x的高阶组件库",
  base: "/",
  port: "8080",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "文档",
        link: "/comps-docs/",
      },
      { text: 'GitHub', link: 'https://github.com/alexwjj', icon: 'reco-github' },
    ],
    
    sidebar: {
      '/comps-docs/': [
        '/comps-docs/',
        '/comps-docs/editTable.md'
      ]
    }
  },
  head: [],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, "../../src"),
      }
    }
  },
  markdown: {},
  plugins
};
