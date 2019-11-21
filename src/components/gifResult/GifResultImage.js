import React from 'react'
import { connect } from 'react-redux'

const GifResultImage = ({fetchedGif}) => {
    if (fetchedGif.gif.images_info) {
        return (
            <div>
                <span className="card-title center">{fetchedGif.gif.title}</span>
                <div className="card-image">
                    <img src={fetchedGif.gif.images_info.fixed_height.url} alt="gif"/>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card-image">
                <img src="noimage.jpg" alt="no gif for search"/>
                <p>There was no image for your search</p>
            </div>
            
        )
    }
};

const mapStateToProps = (state) => {
    return {
        fetchedGif: state.fetchedGif
    }
}

export default connect(mapStateToProps)(GifResultImage);