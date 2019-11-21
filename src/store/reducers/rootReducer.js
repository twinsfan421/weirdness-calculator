import likedGifsReducer from './likedGifsReducer';
import getGifResultReducer from './getGifResultReducer'
import { combineReducers } from 'redux';
import fetchedGifReducer from './fetchedGifReducer';

const rootReducer = combineReducers({
    likedGifs: likedGifsReducer,
    getGifResult: getGifResultReducer,
    fetchedGif: fetchedGifReducer,
});

export default rootReducer