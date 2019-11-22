import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGif } from '../../store/actions/getGifActions'

class Slider extends Component {
    state = {
        weirdness: '0',
    }
    handleChange = (e) => {
        this.setState({weirdness: e.target.value})
        this.props.getGif(this.props.gif.term, parseInt((e.target.value)))
    }
    componentDidUpdate(prevProps) {
        if (prevProps.gif.term !== this.props.gif.term) this.setState({weirdness: '0'})
    }
    render() {
        const weirdness = this.state.weirdness
        return (
            <div className="search-bar">
                <form action="#">
                    <p className="range-field">
                        <input type="range" id="weirdness" min="0" max="10" value={weirdness} onChange={this.handleChange} />
                        <span>Wierdness: {weirdness}</span>
                    </p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gif: state.fetchedGif.gif
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGif: (term, weirdness) => dispatch(getGif(term, weirdness))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
