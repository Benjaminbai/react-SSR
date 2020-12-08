import fs from 'fs'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import RouterConfig from '../app/router'
import React from 'react'
import path from 'path'
import { Provider } from 'react-redux'
import CreateStore from '../app/redux/store/create'

function templating(props) {
    const template = fs.readFileSync(path.join(__dirname, '../template/server.html'), 'utf-8')
    return template.replace(/{{([\s\S]*?)}}/g, (_, key) => props[key.trim()])
}

export default function (ctx, next) {
    try {
        ctx.render = (data = {}) => {
            const store = CreateStore(data)
            const html = renderToString(
                <Provider store={store}>
                    <StaticRouter location={ctx.url}>
                        <RouterConfig />
                    </StaticRouter>
                </Provider>
            )
            const body = templating({
                html,
                store: JSON.stringify(data, null, 4)
            })
            ctx.body = body
        }
    } catch (err) {
        ctx.body = templating({ html: err.messaage })
    }
    ctx.type = "text/html"
    return next()
}