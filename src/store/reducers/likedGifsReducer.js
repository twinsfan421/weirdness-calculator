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
        case 'UNLIKE_GIF':
            return {
                alreadyLikedterms: state.alreadyLikedterms.filter(term => action.term !== term),
                gifs: state.gifs.filter(gif => action.gif.id !== gif.id)
                }
        default:
            return state
    }
}

export default likeGifsReducer