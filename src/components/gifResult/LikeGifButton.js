import React, { Component } from 'react'
import { connect } from 'react-redux'
import { likeGif } from '../../store/actions/likedGifsActions'
class LikeGifButton extends Component {
    handleClick = () => {
        const { fetchedGif, likeGif } = this.props
        likeGif(fetchedGif)
    }
    render() {
        return (
            <div className="row">
                <button className="btn center-align" onClick={this.handleClick}>Like</button>
            </div>             
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fetchedGif: state.fetchedGif
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        likeGif: (gif) => dispatch(likeGif(gif))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeGifButton)