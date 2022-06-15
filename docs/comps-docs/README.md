# 开发必读

## 安装

```
npm install @alexwjj/element-pro

yarn add @alexwjj/element-pro

pnpm add @alexwjj/element-pro
```

## 本地开发
### 目的结构
```js
element-pro
├─src // 组件相关
|  ├─README.md
|  ├─edit-table
|  |     ├─README.md
|  |     └index.vue
├─docs  // 文档相关
|  ├─README.md
|  ├─comps // 文档说明
|  |   ├─README.md
|  |   └editTable.md
|  ├─.vuepress
|  |     ├─config.js
|  |     ├─enhanceApp.js  // 第三方类库
|  |     ├─plugins.js 
|  |     ├─styles
|  |     |   └index.styl
```

### 组件
以editTable为demo，建立文件后，需在 docs/.vuepress/plugins 中注册，才能在文档中使用

```js
[
    "@vuepress/register-components",
    {
      components: [
        {
          name: "editTable",
          path: "@/edit-table/index.vue",
        },
      ],
    },
  ],
```
### 文档
文档放在 docs/comps-docs/ 文件夹下，同时在侧边栏中注册（docs/.vuepress/config）
```js
sidebar: {
      '/comps-docs/': [
        '/comps-docs/',
        '/comps-docs/editTable.md'
      ]
    }
```