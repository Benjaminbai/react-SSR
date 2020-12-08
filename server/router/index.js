import Router from 'koa-router'
import React from 'react'

const routes = new Router()
routes.get('/', (ctx, next) => {
    ctx.render()
    next()
})

routes.get('/list', (ctx, next) => {
    ctx.render()
    next()
})

export default routes