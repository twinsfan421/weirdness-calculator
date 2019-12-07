import likedGifsReducer from './likedGifsReducer';
import giphyResponseReducer from './giphyResponseReducer'
import { combineReducers } from 'redux';
import fetchedGifReducer from './fetchedGifReducer';

const rootReducer = combineReducers({
    likedGifs: likedGifsReducer,
    giphyResponse: giphyResponseReducer,
    fetchedGif: fetchedGifReducer,
});

export default rootReducer