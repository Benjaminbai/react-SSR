const defaultState = {
    list: [
        'react真好玩',
        'koa有点意思',
        'ssr更有意思'
    ]
}

export default function (state = defaultState, action) {
    switch (action.type) {
        default:
            return state
    }
}