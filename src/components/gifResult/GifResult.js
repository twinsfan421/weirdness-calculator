import React from 'react'
import { connect } from 'react-redux'
import GifResultImage from './GifResultImage';
import Slider from './Slider';

const GifResult = (props) => {
    const { getGifResult } = props
    return (
        <div className="row">
            <div className="card">
                <span className="card-title">Your Result</span>
                <div className="card-content">
                    <div className="container">
                        <div className="card">
                        { getGifResult.pending ? null : <GifResultImage />}
                        </div>
                    </div>
                    <Slider/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        getGifResult: state.getGifResult
    }
}

export default connect(mapStateToProps)(GifResult);