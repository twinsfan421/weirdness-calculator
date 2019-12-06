import React from 'react'

const SmallGifCard = ({gif}) => {
    return (
        <div className="gif-card">
            <span className="center">{gif.title.length > 15 ? `${gif.title.slice(0, 16)}...` : gif.title}</span>
            <div className="card">
                <div className="card-image">
                    <img className="card-image small-gif" src={gif.images_info.fixed_width.url} alt="gif"/>
                </div>
            </div>
        </div>
    )
};

export default SmallGifCard;