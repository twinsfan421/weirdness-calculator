import React from 'react'

const GifCard = ({gif}) => {
        if (gif.images_info) {
            return (
                <div className="center">
                    <span>{gif.title}</span>
                    <div className="card">
                        <div className="card-image">
                            <img src={gif.images_info.fixed_height.url} alt="gif"/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="card-image">
                    <img src="noimage.jpg" alt="no gif for search"/>
                    <p>There was no image for your search</p>
                </div>  
            )
        }
};

export default GifCard;