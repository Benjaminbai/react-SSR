const defaultState = {
    title: 'Hello Redux'
}

export default function (state = defaultState, action) {
    switch (action.type) {
        default:
            return state
    }
}