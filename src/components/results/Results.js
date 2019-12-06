import React, { Component } from 'react'
import { connect } from 'react-redux'
import SmallGifCard from '../cards/SmallGifCard'
import { Link, Redirect } from 'react-router-dom';

class Results extends Component {
    render() {
        const { likedGifs } = this.props
        if (likedGifs) {
            if ( likedGifs.gifs.length !== 5) return <Redirect to='/' />
            const result = Math.round((likedGifs.gifs.map(g => g.weirdness).reduce((a, b) => a + b, 0)) / 5)
            return (
                <div className="search-bar">
                    <div className="container">
                        <h4 className="center section">You scored a {result} of 10 on the weirdness scale!</h4>
                        <h6 className="section">The Gifs you liked</h6>
                        <div className="row section">
                            <div className="col m1 hide-on-small-only"></div>
                            { likedGifs.gifs.map(gif => {
                                return(
                                    <div className="col s12 m2" key={gif.id}>
                                        <SmallGifCard gif={gif}/>
                                        <p className="center">{gif.weirdness}/10</p>
                                    </div>
                                )   
                            })}
                            <div className="col m1 hide-on-small-only"></div>
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