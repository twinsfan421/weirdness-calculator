import React, { Component } from 'react'
import { connect } from 'react-redux'
import GifCard from '../likedGifs/GifCard'
import { Link, Redirect } from 'react-router-dom';

class Results extends Component {
    render() {
        const { likedGifs } = this.props
        if (likedGifs) {
            if ( likedGifs.gifs.length !== 5) return <Redirect to='/' />
            const result = Math.round((likedGifs.gifs.map(g => parseInt(g.weirdness)).reduce((a, b) => a + b, 0)) / 5)
            return (
                <div className="search-bar">
                    <div className="row">
                        <div className="container">
                            <h4 className="center">You scored a {result} of 10 on the weirdness scale!</h4>
                            <h6>The Gifs you liked</h6>
                            { likedGifs.gifs.map(gif => {
                                return(
                                    <div className="col s12 m2" key={gif.id}>
                                        <GifCard gif={gif}/>
                                        <p className="center">{gif.weirdness}/10</p>
                                    </div>
                                )   
                            })}
                        </div>
                    </div>
                    <div className="row center">
                        <Link  to="/" onClick={() => window.location.reload()}>
                            <button className="btn blue">START OVER</button>
                        </Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container center">
                    <p>Loading Results...</p>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        likedGifs: state.likedGifs
    }
}

export default connect(mapStateToProps)(Results)