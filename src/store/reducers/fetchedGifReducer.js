const initSate = {
    gif: null
}

const fetchedGifReducer = (state = initSate, action) => {
    switch(action.type){
        case 'FETCH_GIF_FULFILLED':
            return {
                ...state,
                gif: {
                    id: action.data.id,
                    title: action.data.title,
                    images_info: action.data.images,
                    weirdness: action.weirdness,
                    term: action.term
                }
            }
        case 'LIKE_GIF':
            return {
                ...state,
                gif: null
            }
        default:
            return state
    }
}

export default fetchedGifReducer