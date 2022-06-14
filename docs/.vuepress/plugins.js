const path = require("path");

// 插件配置
module.exports = [
  [
    "demo-container-v2",
    {
      locales: [
        {
          lang: "zh-CN",
          "demo-block": {
            "hide-text": "隐藏",
            "show-text": "显示",
            "copy-text": "复制",
            "copy-success": "成功",
          },
        },
        {
          lang: "en-US",
          "demo-block": {
            "hide-text": "Hide",
            "show-text": "Expand",
            "copy-text": "Copy",
            "copy-success": "Successful",
          },
        },
      ],
    },
  ],
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
];
