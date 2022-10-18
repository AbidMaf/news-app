export default (state, action) => {
    switch (action.type) {
        case 'GET_NEWS':
            return {
                ...state,
                news: action.payload,
            }
        case 'SAVE_NEWS':
            return {
                saves: [action.payload, ...state.news]
            }
        default:
            return state
    }
}
