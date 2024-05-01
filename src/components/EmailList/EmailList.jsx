import EmailItem from "../EmailItem/EmailItem";
import SearchBar from "../SearchBar/SearchBar";
import EmailString from "../EmailString"
import { useEffect, useState } from "react"
import EmailView from "../EmailView";

function EmailList() {

    const [emailString, setEmailString] = useState(false)
    const [emailID, setEmailID] = useState(0);
    const [emailRead, setEmailRead] = useState(0);

    //To pass into email view
    const [emailAddress, setEmailAddress] = useState("");
    const [emailSubject, setEmailSubject] = useState("");
    const [emailName, setEmailName] = useState("");
    const [emailDate, setEmailDate] = useState("");
    const [emailBody, setEmailBody] = useState("");

    const [emailData, setEmailData] = useState([]);
    let eID = null;

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
        console.log('ID: ' + event.currentTarget.dataset.id);
        console.log('DATA: ' + event.currentTarget.dataset.content)
        setEmailID(event.currentTarget.dataset.id);
        setEmailData(event.currentTarget.dataset.content);
        console.log('READ: ' + event.currentTarget.dataset.read);
        setEmailRead(event.currentTarget.dataset.read);

        //for EmailView
        console.log('NAME: ' + event.currentTarget.dataset.name);
        setEmailName(event.currentTarget.dataset.name);
        console.log('DATE: ' + event.currentTarget.dataset.date);
        setEmailDate(event.currentTarget.dataset.date);
        console.log('ADDRESS: ' + event.currentTarget.dataset.address);
        setEmailAddress(event.currentTarget.dataset.address);
        console.log('SUBJECT: ' + event.currentTarget.dataset.subject);
        setEmailSubject(event.currentTarget.dataset.subject);
        console.log('BODY: ' + event.currentTarget.dataset.body);
        setEmailBody(event.currentTarget.dataset.body);

        event.currentTarget.dataset.read = 1;


        
    }

    return (
        <div>
            <SearchBar handleSearch={handleSearch}/>
        
            <div className="flex w-full justify-between">
                <div className="overflow-scroll h-[680px] w-[400px] border-2 border-black translate-x-[150px]">
                {
                    emailString &&
                    <div>
                        {emailString.data.map(email => {

                            return (
                                <EmailItem data={email} address={email.email} name={email.name} subject={email.subject} body={email.body} date={email.date_created} id={email.id} myFunction={openEmail} read={email.read}/>
                            )

                            
                        })}
                    </div>
                }
                </div>

                <div>
                    <EmailView eName={emailName} eDate={emailDate} eAddress={emailAddress}  eSubject={emailSubject} eBody={emailBody}/>
                </div>
            </div>
        </div>
    ) 
    
}  

export default EmailList