import React, { Component } from 'react'
import { connect } from 'react-redux'
import { unlikeGif } from '../../store/actions/likedGifsActions'

class UnlikeGifButton extends Component {
    handleClick = () => {
        const { gif, unlikeGif } = this.props
        unlikeGif(gif)
    }
    render() {
        return (
            <div className="row">
                <div className="right"><button className="btn red" onClick={this.handleClick}><i className="material-icons">remove_circle</i></button></div>
            </div>             
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        unlikeGif: (gif) => dispatch(unlikeGif(gif))
    }
}

export default connect(null, mapDispatchToProps)(UnlikeGifButton)