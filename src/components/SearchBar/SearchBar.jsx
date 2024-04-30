import React from 'react';

const SearchBar = ({ handleSearch }) => {
    const handleInputChange = (event) => {
        const searchQuery = event.target.value;
        handleSearch(searchQuery);
        console.log("inputChange")
    };

    return (
        <div className='w-full'>
            <input className='w-full rounded border border-gray-300 p-1 my-2'
                type="text"
                placeholder="Search..."
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;