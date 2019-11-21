import React from 'react'
import { connect } from 'react-redux'

const LikedGifs = (props) => {
    const { likedGifs } = props
    console.log(likedGifs)
    return (
        <div className="liked-gifs">
            <div className="row">
                <div className="col s12 m5">
                    <h1>hello</h1>
                </div>
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