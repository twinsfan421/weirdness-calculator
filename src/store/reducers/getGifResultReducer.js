const initSate = {
    pending: false,
    error: null
}

const getGifResultReducer = (state = initSate, action) => {
    switch(action.type){
        case 'FETCH_GIF_PENDING':
            return {
                ...state,
                pending: true
            }
        case 'FETCH_GIF_ERROR':
            return {
                ...state,
                pending: false,
                error: action.err
            }
        case 'FETCH_GIF_FULFILLED':
            return {
                ...state,
                pending: false,
            }
        default:
            return state
    }
}

export default getGifResultReducer