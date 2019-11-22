import React from 'react'
import { connect } from 'react-redux'
import GifCard from './GifCard'
import { Link } from 'react-router-dom';
import UnlikeGifButton from './UnlikeGifButton';

const LikedGifs = (props) => {
    const { likedGifs } = props
    return (
        <div className="liked-gifs">
            <h5>Your Liked Gifs</h5>
            <div className="row">
                { likedGifs && likedGifs.gifs.map(gif => {
                    return(
                        <div className="col s12 m5" key={gif.id}>
                            <UnlikeGifButton gif={gif}/>
                            <GifCard gif={gif}/>
                        </div>
                    )   
                })}
            </div>
            <Link to={{
                pathname: "/results",
                state: {gifs: likedGifs}
                }}>
                <button className="btn blue">CALCULATE MY WEIRDNESS SCORE</button>
            </Link>    
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        likedGifs: state.likedGifs
    }
}

export default connect(mapStateToProps)(LikedGifs)