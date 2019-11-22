import React, { Component } from 'react'
import { connect } from 'react-redux'
import { likeGif } from '../../store/actions/likedGifsActions'
class LikeGifButton extends Component {
    handleClick = () => {
        const { fetchedGif, likeGif } = this.props
        likeGif(fetchedGif)
    }
    render() {
        const { fetchedGif, alreadyLikedterms } = this.props
        const alreadyliked = alreadyLikedterms.includes(fetchedGif.gif.term)
        return (
            <div className="row center">
                { alreadyliked ? <p className="red-text">you already liked a gif with that search term, start a new search</p> :
                <button className="btn" onClick={this.handleClick}><i className="material-icons">thumb_up</i></button> }
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        fetchedGif: state.fetchedGif,
        alreadyLikedterms: state.likedGifs.alreadyLikedterms
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        likeGif: (gif) => dispatch(likeGif(gif))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeGifButton)