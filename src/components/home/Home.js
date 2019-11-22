import React from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import GifResult from '../gifResult/GifResult'
import LikedGifs from '../likedGifs/LikedGifs'

const Home = (props) => {
    const { fetchedGif, likedGifs, getGifResult } = props
    const error = getGifResult.error
    return (
        <div className="home">
            <div className="row">
                <div className="col s12 m7">
                    <div className="container">
                        {error ?
                            <p className="red-text">There was an error processing your request: 
                            {error.status} {error.statusText}</p> : null
                         }
                        <div className="row">
                            <SearchBar />
                        </div>
                        <div className="row">
                            {fetchedGif.gif ? <GifResult /> : null}
                        </div>
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
        getGifResult: state.getGifResult
    }
}

export default connect(mapStateToProps)(Home)