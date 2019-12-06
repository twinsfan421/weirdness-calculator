import React from 'react'
import { connect } from 'react-redux'
import Slider from './Slider';
import LikeGifButton from './LikeGifButton';
import GifCard from '../cards/GifCard';

const GifResult = (props) => {
    const { getGifResult,  gif } = props
    return (
        <div className="card">
            <span className="card-title">Your Result</span>
            <div className="card-content">
                <div className="container">
                    <div className="center">
                    { getGifResult.pending ? <p>loading...</p> : <GifCard gif={gif} />}
                    </div>
                </div>
                <LikeGifButton/>
                <Slider/>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        getGifResult: state.getGifResult,
        gif: state.fetchedGif.gif
    }
}

export default connect(mapStateToProps)(GifResult);