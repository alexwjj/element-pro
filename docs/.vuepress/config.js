module.exports = {
  theme: '',
  title: 'ElementPro',
  description: '基于ElementUI + Vue2.x的高阶组件库',
  base: '/',
  port: '8080',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/comps/'
      }
    ],
    sidebar: {
      '/comps/': [
        '/comps/',
        '/comps/select.md'
      ]
    }
  },
  head: [],
  plugins: ['demo-container'],
  markdown: {}
}