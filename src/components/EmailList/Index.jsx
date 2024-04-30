import EmailItem from "../EmailItem/Index";
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
        <div>
            <div className="overflow-scroll h-[720px] w-[400px]">
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