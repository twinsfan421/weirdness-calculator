import React from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import GifResult from '../gifResult/GifResult'
import LikedGifs from '../likedGifs/LikedGifs'

const Home = (props) => {
    const { fetchedGif } = props
    return (
        <div className="home">
            <div className="row">
                <div className="col s12 m7">
                    <div className="container">
                        <div className="row">
                            <SearchBar />
                        </div>
                        <div className="row">
                            {fetchedGif.gif ? <GifResult /> : null}
                        </div>
                    </div>
                </div>
                <div className="col s12 m5">
                    <LikedGifs/>
                </div> 
            </div>             
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        fetchedGif: state.fetchedGif
    }
}

export default connect(mapStateToProps)(Home)