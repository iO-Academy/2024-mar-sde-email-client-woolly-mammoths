import EmailItem from "../EmailItem/EmailItem";
import SearchBar from "../SearchBar/SearchBar";
import EmailString from "../EmailString"
import { useEffect, useState } from "react"

function EmailList() {

    const [emailString, setEmailString] = useState(false)
    const emailItems = [];

    function fetchJSON() {
        
        useEffect(() => {
            fetch("https://email-client-api.dev.io-academy.uk/emails")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setEmailString(data)
                return(
                    emailString
                )
            })
        }, [])

    }

    fetchJSON();

    const [filteredEmailItems, setFilteredEmailItems] = useState(emailString);

    const handleSearch = (searchQuery) => {
        const filteredItems = EmailString.filter(email => {
            return email.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                email.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                email.date_created.includes(searchQuery);
        });
        setFilteredEmailItems(filteredItems);
        setEmailString(filteredItems);
        console.log("working");
    };

    return (
        <div className="pl-64">
            <SearchBar handleSearch={handleSearch}/>
        
            <div className="overflow-scroll h-[600px] w-[400px] border-2 border-black ">
            {
                emailString &&
                <div>
                    {emailString.data.map(email => {
                        return (
                            <EmailItem data={email} name={email.name} subject={email.subject} body={email.body} date={email.date_created}/>
                        )
                    })}
                </div>
            }
            </div>
        </div>
    )
  }
  
  export default EmailList