import axios from 'axios';

export const getGif = (term, weirdness) => {
    
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

    return (dispatch, getState) => {
        dispatch({type: "FETCH_GIF_PENDING"})
        axios.get(`http://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${term}&weirdness=${weirdness}`
        ).then((response) => {
            dispatch({ type: 'FETCH_GIF_FULFILLED',
            data: response.data.data,
            weirdness: weirdness,
            term: term
        });
        }).catch((err) => {
            dispatch({ type: 'FETCH_GIF_ERROR', err: err.response });
        });
    }
}