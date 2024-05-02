import EmailItem from "../EmailItem";
import { useEffect, useState } from "react"
import EmailView from "../EmailView";

function EmailList() {

    const [emailArray, setEmailArray] = useState(false);
    const [emailID, setEmailID] = useState(0);
    const [emailRead, setEmailRead] = useState(0);
    const [refreshJson, setRefreshJson] = useState(false);

    //To pass into email view
    const [emailAddress, setEmailAddress] = useState("");
    const [emailSubject, setEmailSubject] = useState("");
    const [emailName, setEmailName] = useState("");
    const [emailDate, setEmailDate] = useState("");
    const [emailBody, setEmailBody] = useState("");

    const [buttonClass, setButtonClass] = useState("hidden");
    
    const [emailData, setEmailData] = useState([]);

    //Mobile View
    const [mobileView, setMobileView] = useState(false);
    const [emailViewHidden, setEmailViewHidden] = useState(false);
    const [emailListHidden, setEmailListHidden] = useState(false);
    const [emailListClasses, setEmailListClasses] = useState("flex w-full justify-between");

    //For fullheight adjusted for header - Works at any screen height
    const hh = (visualViewport.height - 64);
    const [screenHeightAdj, setScreenHeightAdj] = useState("w-full md:w-2/6 overflow-scroll h-["+hh+"px]");

   
    useEffect(() => {
        fetch("https://email-client-api.dev.io-academy.uk/emails")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setEmailArray(data);
            setRefreshJson(false);
            return(
                emailArray
            )
        })
    }, [refreshJson])



    //SETS EMAIL TO READ
    function setRead(id) {
        fetch("https://email-client-api.dev.io-academy.uk/emails/" + id, {
            method: "PUT"
        })
        setRefreshJson(true);
        
    }

    const openEmail = (event) => {
        

        setRead(event.currentTarget.dataset.id);

        if ((emailBody === "") || (emailBody != event.currentTarget.dataset.body)){
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

            setButtonClass("");
        }
        else {
            closeEmail();
        }

    }

    function closeEmail() {
        setEmailName("");
        setEmailDate("");
        setEmailAddress("");
        setEmailSubject("");
        setEmailBody("");
        setButtonClass("hidden");
    }

    //MOBILE VIEW
    useEffect(() => {
        if (visualViewport.width < 768){
            setEmailViewHidden(emailBody == "");
            setEmailListHidden(!(emailBody == ""));
            //fixes emailView display on mobile
            setEmailListClasses("w-full h-[630px]");
        }
        else{
            setEmailViewHidden(false);
            setEmailListHidden(false);
            setEmailListClasses("flex w-full justify-between h-screen");
        }

        console.log("Screen Width: " + visualViewport.width);
        console.log("EmailViewHidden:" + emailViewHidden);
        console.log("EmailListHidden:" + emailListHidden);
        
    }, [mobileView, buttonClass])

    return (
        <div>
        
            <div className={emailListClasses}>
                <div className={screenHeightAdj}>
                {
                
                    (emailArray && !emailListHidden) &&
                    <div>
                        {emailArray.data.map(email => {
                            return (
                                <EmailItem data={email} address={email.email} name={email.name} subject={email.subject} body={email.body} date={email.date_created} id={email.id} myFunction={openEmail} read={email.read}/>
                            )
                        })}
                    </div>
                }
                </div>

                <EmailView eName={emailName} eDate={emailDate} eAddress={emailAddress}  eSubject={emailSubject} eBody={emailBody} myFunction={closeEmail} buttonClass={buttonClass} hidden={emailViewHidden}/>
                
            </div>
        </div>
    ) 
    
}  

export default EmailList