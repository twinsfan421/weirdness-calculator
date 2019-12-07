import React from 'react'

const SmallGifCard = ({gif}) => {
    return (
        <div className="gif-card">
            <span className="center">{gif.title.length > 10 ? `${gif.title.slice(0, 11)}...` : gif.title}</span>
            <div className="card">
                <div className="card-image">
                    <img className="small-gif" src={gif.images_info.fixed_width.url} alt="gif"/>
                </div>
            </div>
        </div>
    )
};

export default SmallGifCard;