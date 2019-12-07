import React from 'react'

const GifCard = ({gif}) => {
        if (gif.images_info) {
            return (
                <div>
                    <span className="center">{gif.title ? gif.title : "No Title"}</span>
                    <div className="card">
                        <div className="card-image">
                            <img className="gif-image" src={gif.images_info.fixed_width.url} alt="gif"/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <span className="center">There was no image for your search</span>
                    <div className="card">
                        <div className="card-image">
                            <img className="gif-image" src="noimage.jpg" alt="no gif for search"/>
                        </div>
                    </div>
                </div>
            )
        }
};

export default GifCard;