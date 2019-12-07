const initSate = {
    pending: false,
    error: null,
    searching: false
}

const giphyResponseReducer = (state = initSate, action) => {
    switch(action.type){
        case 'FETCH_GIF_PENDING':
            return {
                ...state,
                pending: true,
                searching: true
            }
        case 'FETCH_GIF_ERROR':
            return {
                ...state,
                pending: false,
                error: action.err,
                searching: false
            }
        case 'FETCH_GIF_FULFILLED':
            return {
                ...state,
                pending: false,
                searching: true
            }
        default:
            return state
    }
}

export default giphyResponseReducer