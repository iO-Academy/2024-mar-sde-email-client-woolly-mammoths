import React, { useState } from 'react';
import EmailItem from "../EmailItem/EmailItem";
import SearchBar from "../SearchBar/searchBar";

function EmmailList() {
    const [emailItems, setEmailItems] = useState([
        { id: 1, name: 'John Doe', subject: 'Meeting', preview: 'Meeting at 10 AM', date: '01/04/2024', read: false },
        { id: 2, name: 'Jane Smith', subject: 'Report', preview: 'Attached the report', date: '02/04/2024', read: true },
        
    ]);

    const [filteredEmailItems, setFilteredEmailItems] = useState(emailItems);

    const handleSearch = (searchQuery) => {
        const filteredItems = emailItems.filter(email => {
            return email.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                email.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                email.date.includes(searchQuery);
        });
        setFilteredEmailItems(filteredItems);
    };

    return (
        <div>
            <SearchBar handleSearch={handleSearch} />
            <div className='flex flex-col-reverse bg-gray-800 w-[300px]'>
                {filteredEmailItems.map(email => (
                    <EmailItem key={email.id} email={email} />
                ))}
            </div>
        </div>
    );
}

export default EmmailList;