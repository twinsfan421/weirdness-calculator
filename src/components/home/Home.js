import React from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import GifResult from '../gifResult/GifResult'

const Home = (props) => {
    const { fetchedGif } = props
    return (
        <p>hello from home</p>
    );
}

const mapStateToProps = (state) => {
    return {
        fetchedGif: state.fetchedGif
    }
}

export default connect(mapStateToProps)(Home)