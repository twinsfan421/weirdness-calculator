import React, { Component } from 'react'
import { connect } from 'react-redux'
import { likeGif } from '../../store/actions/likedGifsActions'
class LikeGifButton extends Component {
    handleClick = () => {
        const { fetchedGif, likeGif } = this.props
        likeGif(fetchedGif)
    }
    render() {
        console.log(this.props)
        const { fetchedGif, alreadyLikedterms } = this.props
        const alreadyliked = alreadyLikedterms.includes(fetchedGif.gif.term)
        console.log(alreadyliked)
        return (
            <div className="row">
                { alreadyliked ? <p className="red-text center-align">you already like a gif with that search term, select a new gif</p> :
                <button className="btn center-align" onClick={this.handleClick}>Like</button> }
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