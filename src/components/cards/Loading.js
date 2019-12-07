import React from 'react'

const Loading = () => {
    return (
        <div>
            <span className="center">Loading...</span>
            <div className="card">
                <div className="card-image">
                    <img className="loading-image" src="loading.jpg" alt="gif"/>
                </div>
            </div>
        </div>
    )
};

export default Loading;