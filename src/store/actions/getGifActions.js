import axios from 'axios';

export const getGif = (term, weirdness) => {
    
    const API_KEY = 'NZ5TqKkRZ776K6eusUK66SYJ9AAinR7S'

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