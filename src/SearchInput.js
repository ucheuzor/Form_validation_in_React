import React from 'react';
import './searchInput.scss';

const SearchInput = () => {
    return (
        <div className="search-group">
            <input type="text" className="search-group__input" placeholder="Search on Twitter" />
            <span className="search-group__icon">
            </span>
            <div className="search-group__results">
                <p className="search-group__instruction">
                    Try to search for people, topics or keywords.
                </p>
            </div>
        </div>
    );
};

export default SearchInput;