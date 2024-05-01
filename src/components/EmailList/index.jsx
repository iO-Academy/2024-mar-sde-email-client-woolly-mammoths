import React, { useEffect, useState } from "react";
import EmailItem from "../EmailItem";
import SearchBar from "../SearchBar/SearchBar";

function EmailList() {
    const [emailArray, setemailArray] = useState([]);
    const [filteredEmailItems, setFilteredEmailItems] = useState([]);

    useEffect(() => {
        fetch("https://email-client-api.dev.io-academy.uk/emails")
            .then(response => response.json())
            .then(data => {
                setemailArray(data);
                setFilteredEmailItems(data);
                console.log("Email data:", data);
            })
            .catch(error => console.error('Error fetching emails:', error));
    }, []);
    
    const handleSearch = (searchQuery) => {
        if (!Array.isArray(emailArray.data)) {
            console.error("Email data is not an array:", emailArray.data);
            return;
        }
        console.log("Search Query:", searchQuery);
        const filteredItems = emailArray.data.filter(email => {
            console.log("Email:", email);
            const matchName = email.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchSubject = email.subject.toLowerCase().includes(searchQuery.toLowerCase());
            const matchBody = email.body.toLowerCase().includes(searchQuery.toLowerCase());
            const matchDate = email.date_created.includes(searchQuery);
            console.log("Matches:", matchName, matchSubject, matchBody, matchDate);
            return matchName || matchSubject || matchBody || matchDate;
        });
        console.log("Filtered Items:", filteredItems);
        setFilteredEmailItems(filteredItems);
    };

    const handleClear = () => {
        setFilteredEmailItems(emailArray.data);
    }
    
    
    return (
        <div>
            <SearchBar handleSearch={handleSearch} handleClear={handleClear}/>
        
            <div className="overflow-scroll h-[600px] w-[400px] border-2 border-black">
                {filteredEmailItems.length > 0 ? (
                    filteredEmailItems.map(email => (
                        <EmailItem
                            key={email.id}
                            name={email.name}
                            subject={email.subject}
                            body={email.body}
                            date={email.date_created}
                        />
                    ))
                ) : (
                    <p>No emails found.</p>
                )}
            </div>
        </div>
    );
}

export default EmailList;
