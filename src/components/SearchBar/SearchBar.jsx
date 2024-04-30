import React from 'react';

const SearchBar = ({ handleSearch }) => {
    const handleInputChange = (event) => {
        const searchQuery = event.target.value;
        handleSearch(searchQuery);
        console.log("inputChange")
    };

    return (
        <div className='w-11/12 p-2'>
            <input className='rounded border border-gray-300 p-1 w-full my-2'
                type="text"
                placeholder="Search..."
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;