import React from 'react';

const SearchBar = ({ handleSearch }) => {
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
        </div>
    );
};

export default SearchBar;