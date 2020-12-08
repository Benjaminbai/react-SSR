
import React from 'react'
import Koa from 'koa'
import { renderToString } from 'react-dom/server'

const app = new Koa()
const App = () => <div>Hello Koa SSR</div>

app.use(ctx => {
    ctx.body = renderToString(<App />)
})

app.listen(9000, () => {
    console.log(`node服务已经启动, 请访问localhost:9000`)
})