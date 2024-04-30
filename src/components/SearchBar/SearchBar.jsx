import React from 'react';

const SearchBar = ({ handleSearch, handleClear }) => {
    const handleInputChange = (event) => {
        const searchQuery = event.target.value;
        handleSearch(searchQuery);
        console.log("inputChange")
    };

    return (
        <div>
            <input 
                type="text"
                placeholder="Search..."
                onChange={handleInputChange}
            />
            <button onClick={handleClear}>Clear</button>
        </div>
    );
};

export default SearchBar;