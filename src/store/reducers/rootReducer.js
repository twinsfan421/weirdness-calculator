import likesReducer from './likedGifsReducer';
import getGifResultReducer from './getGifResultReducer'
import { combineReducers } from 'redux';
import fetchedGifReducer from './fetchedGifReducer';

const rootReducer = combineReducers({
    likes: likesReducer,
    getGifResult: getGifResultReducer,
    fetchedGif: fetchedGifReducer,
});

export default rootReducer