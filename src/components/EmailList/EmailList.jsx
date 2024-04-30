import EmailItem from "../EmailItem/EmailItem";
import SearchBar from "../SearchBar/SearchBar";
import EmailString from "../EmailString"
import { useEffect, useState } from "react"

function EmailList({eID = 0}) {

    const [emailString, setEmailString] = useState(false)
    const [emailID, setEmailID] = useState(0);
    const emailItems = [];

    useEffect(() => {
        console.log("email ID'd")
        eID = emailID;
    }, [emailID])

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

    const openEmail = (event) => {
        console.log('ID: ' + event.currentTarget.dataset.id)
        setEmailID(event.currentTarget.dataset.id);
    }

    return (
        <div>
            <SearchBar handleSearch={handleSearch}/>
        
            <div className="overflow-scroll h-[680px] w-[400px] border-2 border-black translate-x-[150px]">
            {
                emailString &&
                <div>
                    {emailString.data.map(email => {
                        return (
                            <EmailItem data={email} name={email.name} subject={email.subject} body={email.body} date={email.date_created} id={email.id} myFunction={openEmail}/>
                        )
                    })}
                </div>
            }
            </div>
        </div>
    )
  }
  
  export default EmailList