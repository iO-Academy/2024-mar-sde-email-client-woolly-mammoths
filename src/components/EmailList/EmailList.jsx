import React, { useEffect, useState } from "react";
import EmailItem from "../EmailItem/EmailItem";
import SearchBar from "../SearchBar/SearchBar";

function EmailList() {
    const [emailString, setEmailString] = useState([]);
    const [filteredEmailItems, setFilteredEmailItems] = useState([]);

    useEffect(() => {
        fetch("https://email-client-api.dev.io-academy.uk/emails")
            .then(response => response.json())
            .then(data => {
                setEmailString(data);
                setFilteredEmailItems(data);
                console.log("Email data:", data); // Log the fetched data
            })
            .catch(error => console.error('Error fetching emails:', error));
    }, []);
    
    const handleSearch = (searchQuery) => {
        if (!Array.isArray(emailString.data)) {
            console.error("Email data is not an array:", emailString.data);
            return;
        }
        console.log("Search Query:", searchQuery);
        const filteredItems = emailString.data.filter(email => {
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
    
    
    return (
        <div>
            <SearchBar handleSearch={handleSearch}/>
        
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
