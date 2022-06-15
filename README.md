<p align="center">
  <img src="https://element.eleme.cn/static/theme-index-blue.c38b733.png">
</p>

## ElementPro

## VuePress
- VuePress 遵循 “约定优于配置” 的原则

## 其他小技巧
### 生成文件目录
```js
//忽略某个文件夹 并输出到指定文件中
treer -i "node_modules" -e  "catalogue.md"
```
### 发布 
因为是带前缀的私有包，不想付费就得指定公开
```js
npm publish --access public
```
## 参考文章
- [手把手使用VuePress搭建Element的组件库文档官网](https://segmentfault.com/a/1190000040437920)
- [npm login登录失败. code E409。Enter one-time password](https://segmentfault.com/a/1190000041167927)

## 待处理问题
[x] 部分修改热更新失效
