import React from 'react'
import { connect } from 'react-redux'
import SmallGifCard from '../cards/SmallGifCard'
import { Link } from 'react-router-dom';
import UnlikeGifButton from './UnlikeGifButton';
import './LikedGifs.css'

const LikedGifs = (props) => {
    const { likedGifs } = props
    const length = likedGifs.gifs.length
    const disableCalulate = length !== 5 ? true : false
    return (
        <div className="liked-gifs">
            <h5>YOUR LIKED GIFS</h5>
            <div className="row">
                { likedGifs && likedGifs.gifs.map(gif => {
                    return(
                        <div className="col s6 liked-gif-card" key={gif.id}>
                            <UnlikeGifButton gif={gif}/>
                            <SmallGifCard gif={gif}/>
                        </div>
                    )
                })}
            </div>
            <div className="center">            
                <Link to={{pathname: "/results", state: {gifs: likedGifs}}}>
                    <button className="btn blue" disabled={disableCalulate}>CALCULATE MY WEIRDNESS SCORE</button>
                </Link>     
                { disableCalulate ? <p>You must like {5 - length} more gifs to calculate your score</p> : null} 
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