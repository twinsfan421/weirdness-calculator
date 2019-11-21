import React from 'react'
import { connect } from 'react-redux'
import GifCard from './GifCard'

const LikedGifs = (props) => {
    const { likedGifs } = props
    return (
        <div className="liked-gifs">
            <h5>Your Liked Gifs</h5>
            <div className="row">
                { likedGifs && likedGifs.gifs.map(gif => {
                        return(
                            <div className="col s12 m5" key={gif.id}>
                                <GifCard gif={gif}/>
                            </div>
                        )   
                    })}
            </div>           
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        likedGifs: state.likedGifs
    }
}

export default connect(mapStateToProps)(LikedGifs)