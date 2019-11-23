import React from 'react'
import { connect } from 'react-redux'
import GifCard from './GifCard'
import { Link } from 'react-router-dom';
import UnlikeGifButton from './UnlikeGifButton';

const LikedGifs = (props) => {
    const { likedGifs } = props
    const length = likedGifs.gifs.length
    const enableCalulate = length === 5 ? true : false
    return (
        <div className="liked-gifs">
            <h5>YOUR LIKED GIFS</h5>
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
            <div className="center">                
                <Link to={{pathname: "/results", state: {gifs: likedGifs}}}>
                    <button className="btn blue" disabled={enableCalulate}>CALCULATE MY WEIRDNESS SCORE</button>
                </Link>     
                <p>You must like {5 - length} more gifs to calculate your score</p>
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