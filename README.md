# react + koa 的一个ssr案例


## 文章教程
[教程一](https://juejin.im/post/5c90b4115188252d9559136c)
[教程二](https://juejin.im/post/5cb86c866fb9a068b47b7338)

## 快速启动
```
npm i
npm run dev
```

访问localhost:8000




1. 服务器渲染，使用koa
2. 此demo分前端渲染和服务端渲染两套
3. 首先是考虑路由跳转，服务端不做特别处理，页面展示内容将会被前端替换
4. 维护两套router，前端一套，服务端一套
5. 服务端router使用koa-router
6. 需要编写一个中间件templating，解决页面替换问题
7. 还需要解决前端，服务端数据一致性问题，用到了redux
8. 服务端也要处理redux，在templating中间件中用react-redux包裹
9. 前端redux也要处理，用服务端传的数据