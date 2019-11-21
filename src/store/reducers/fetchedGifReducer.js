const initSate = {
    gif: null,
    term: null
}

const fetchedGifReducer = (state = initSate, action) => {
    switch(action.type){
        case 'FETCH_GIF_FULFILLED':
            return {
                ...state,
                term: action.term,
                gif: {
                    id: action.data.id,
                    title: action.data.title,
                    images_info: action.data.images,
                    weirdness: action.weirdness
                }
            }
        default:
            return state
    }
}

export default fetchedGifReducer