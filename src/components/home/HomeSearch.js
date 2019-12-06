import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGif } from '../../store/actions/getGifActions'
import SearchBar from './SearchBar'

class HomeSearch extends Component {
    state = {
        term:"",
    }
    handleChange = (e) => {
        this.setState({ term: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getGif(this.state.term, 0)
        this.setState({term: ""})
    }
    render() {
        return (
            <div className="col s12">
                <div>
			    	<p>
	    	      	  Find out how weird you are by selecting the GIFs that make you laugh.
	    	      	  We'll show you the least weird ones to start, but you can move the slider to make them weirder.
	    	      	</p>
	    	      	<p>
	    	      	  When you find a GIF you like, press the Like button. Once you like 5 GIFs, we'll show you how weird you are.
	    	      	</p>
			    </div>
                <SearchBar value={this.state.term} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getGif: (term, weirdness) => dispatch(getGif(term, weirdness))
    }
}

export default connect(null, mapDispatchToProps)(HomeSearch)