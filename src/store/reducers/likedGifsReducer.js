const initSate = {
    gifs: [],
    alreadyLikedterms: []
}

const likeGifsReducer = (state = initSate, action) => {
    switch(action.type){
        case 'LIKE_GIF':
            return {
                alreadyLikedterms: [...state.alreadyLikedterms, action.gif.term],
                gifs: [...state.gifs, action.gif]
                }
        default:
            return state
    }
}

export default likeGifsReducer