import React from 'react'
import { connect } from 'react-redux'
import GifResult from '../gifResult/GifResult'
import LikedGifs from '../likedGifs/LikedGifs'
import HomeSearch from './HomeSearch'

const Home = (props) => {
    const { fetchedGif, likedGifs, giphyResponse } = props
    const error = giphyResponse.error
    return (
        <div className="home">
            <div className="row">
                <div className="col s12 m7">
                    <div className="container">
                        {error ?
                            <p className="red-text">There was an error processing your request: 
                            {error.status} {error.statusText}</p> : null
                            }
                            <HomeSearch />
                            {fetchedGif.gif ? <GifResult /> : null}
                    </div>
                </div>
                <div className="col s12 m5">
                    { likedGifs.gifs.length > 0 ? <LikedGifs/> : null }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        fetchedGif: state.fetchedGif,
        likedGifs: state.likedGifs,
        giphyResponse: state.giphyResponse
    }
}

export default connect(mapStateToProps)(Home)