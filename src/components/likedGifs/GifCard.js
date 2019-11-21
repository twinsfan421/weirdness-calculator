import React from 'react'

const GifCard = ({gif}) => {
    return (
        <div className="card">
            <span className="card-title center">{gif.title}</span>
            <div className="card-image">
                <img src={gif.images_info.fixed_width_small.url} alt="gif"/>
            </div>
        </div>
    )
};

export default GifCard;