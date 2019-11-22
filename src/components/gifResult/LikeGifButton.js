import React, { Component } from 'react'
import { connect } from 'react-redux'
import { likeGif } from '../../store/actions/likedGifsActions'
class LikeGifButton extends Component {
    handleClick = () => {
        const { fetchedGif, likeGif } = this.props
        likeGif(fetchedGif)
    }
    render() {
        const { fetchedGif, likedGifs } = this.props
        const alreadyliked = likedGifs.alreadyLikedterms.includes(fetchedGif.gif.term)
        const fiveLikes = likedGifs.gifs.length > 4 ? true : false
        return (
            <div className="row center">
                { fiveLikes ? <p className="red-text">5 likes Max</p> : null}
                { alreadyliked ? <p className="red-text">you already liked a gif with that search term, start a new search</p> :
                <button className="btn" onClick={this.handleClick} disabled={fiveLikes}><i className="material-icons">thumb_up</i></button> }
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fetchedGif: state.fetchedGif,
        likedGifs: state.likedGifs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        likeGif: (gif) => dispatch(likeGif(gif))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeGifButton)