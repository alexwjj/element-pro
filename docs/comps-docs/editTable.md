# editTable

- 双击单元格进行编辑
- 失焦自动保存

## Demo

::: demo

```html
<template>
  <editTable :table-data="tableData"></editTable>
</template>

<script>
  export default {
    data() {
      return {
        tableData: {
          colums: [
            { prop: "user", name: "登录用户", isEdit: true },
            { prop: "pwd", name: "登录密码", isEdit: true },
            { prop: "select_degree", name: "学历", isEdit: false },
            { prop: "info", name: "其他信息", isEdit: true },
          ],
          data: [
            {
              user: "登录用户0",
              pwd: "登录密码0",
              degree: "本科",
              select_degree: "1",
              info: "其他信息0",
              isEdit: false,
              role: "经理",
              select_role: "2",
            },
            {
              user: "登录用户1",
              pwd: "登录密码1",
              degree: "大专",
              select_degree: "2",
              info: "其他信息1",
              isEdit: false,
              role: "经理",
              select_role: "2",
            },
            {
              user: "登录用户2",
              pwd: "登录密码2",
              degree: "本科",
              select_degree: "1",
              info: "其他信息2",
              isEdit: false,
              role: "经理",
              select_role: "2",
            },
          ],
        },
      };
    },
  };
</script>
```

:::

## Api

和element table保持一致，均可以透传