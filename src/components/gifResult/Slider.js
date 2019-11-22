import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGif } from '../../store/actions/getGifActions'

class Slider extends Component {
    handleChange = (e) => {
        this.props.getGif(this.props.fetchedGif.gif.term, e.target.value)
    }
    render() {
        return (
            <div className="search-bar">
                <form action="#">
                    <p className="range-field">
                        <input type="range" id="slider" min="0" max="10" defaultValue="0" onChange={this.handleChange} />
                    </p>
                </form>
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
        getGif: (term, weirdness) => dispatch(getGif(term, weirdness))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
