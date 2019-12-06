import React from 'react'

const GifCard = ({gif}) => {
        if (gif.images_info) {
            return (
                <div className="gif-card">
                    <span className="center">{gif.title}</span>
                    <div className="card">
                        <div className="card-image">
                            <img className="responsive-img" src={gif.images_info.fixed_height.url} alt="gif"/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="no-image-gif-card">
                    <div className="card medium">
                        <div className="card-image">
                            <img src="noimage.jpg" alt="no gif for search"/>
                            <p>There was no image for your search</p>
                        </div>
                    </div>
                </div>
            )
        }
};

export default GifCard;