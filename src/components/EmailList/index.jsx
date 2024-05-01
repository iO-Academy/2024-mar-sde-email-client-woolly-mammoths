import EmailItem from "../EmailItem";
import SearchBar from "../SearchBar";
import { useEffect, useState } from "react"
import EmailView from "../EmailView";

function EmailList() {

    const [emailsOverview, setEmailsOverview] = useState(false);
    const [emailID, setEmailID] = useState(0);
    const [emailRead, setEmailRead] = useState(0);
    const [emailArray, setEmailArray] = useState([]);

    //To pass into email view
    const [emailAddress, setEmailAddress] = useState("");
    const [emailSubject, setEmailSubject] = useState("");
    const [emailName, setEmailName] = useState("");
    const [emailDate, setEmailDate] = useState("");
    const [emailBody, setEmailBody] = useState("");

    const [emailData, setEmailData] = useState([]);
    let eID = null;

    useEffect(() => {
        console.log("email ID'd");
        eID = emailID;
    }, [emailID]);


    function fetchJSON() {
        
        useEffect(() => {
            fetch("https://email-client-api.dev.io-academy.uk/emails")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setEmailsOverview(data);

                setEmailArray(JSON.parse(JSON.stringify(data)));
                return(
                    emailsOverview
                )
            })
        }, [])

    }

    fetchJSON();

    //THIS BIT
    function setRead(id) {
        console.log("data" + emailArray);
        console.log("zero0");
        emailArray.data.forEach(element => {
        console.log("one1");
        
        if (element.id === id){
            console.log("two2");
            emailArray.read = 1;
            }
        })
    }

    const [filteredEmailItems, setFilteredEmailItems] = useState(emailsOverview);

    const handleSearch = (searchQuery) => {
        const filteredItems = emailsOverview.filter(email => {
            return email.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                email.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                email.date_created.includes(searchQuery);
        });
        setFilteredEmailItems(filteredItems);
        setemailsOverview(filteredItems);
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

        setRead(event.currentTarget.dataset.id);

    }

    return (
        <div>
            <SearchBar handleSearch={handleSearch}/>
        
            <div className="flex w-full justify-between">
                <div className="overflow-scroll h-[680px] w-[400px] border-2 border-black translate-x-[150px]">
                {
                    emailsOverview &&
                    <div>
                        {emailsOverview.data.map(email => {

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