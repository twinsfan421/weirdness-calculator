import React from 'react';

const SearchBar = ({value, handleSubmit, handleChange}) => {
    return (
        <form onSubmit={handleSubmit} >
            <label className="input-field col s7"htmlFor="term">Search Term</label>
            <div className="input-field col s7">
                    <input type="text" id="term" value={value} onChange={handleChange} required/>
            </div>
            <div className="input-field col s5">
                <button className="btn blue">SEARCH</button>
            </div>
        </form>
    );
}

export default SearchBar