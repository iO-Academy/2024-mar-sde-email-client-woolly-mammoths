import EmailSentItem from "../EmailSentItem"
import { useEffect, useState } from "react"
import SentEmailView from "../SentEmailView"


function SentList() {

    const [emailSent, setEmailSent] = useState(false);
    const [showEmailView, setShowEmailView] = useState(false);


        
        useEffect(() => {
            fetch("https://email-client-api.dev.io-academy.uk/emails/sent")
            .then(response => response.json())
            .then(data => {
                setEmailSent(data.data)
            })
        }, [])
    
        function handleOpen(email, id) {
                setShowEmailView(true); 
                };
  
    
        return (
        <div>
            <div className="">
            
                <div className="overflow-scroll h-[720px] w-[400px]">
                {
                    emailSent &&
                    <div>
                        {emailSent.data.map(email => {
                            return (
                                <EmailSentItem data={email} address={email.email} name={email.name} subject={email.subject} body={email.body} date={email.date_created} id={email.id} handleOpen={handleOpen} read={email.read}/>
                            )
                        })}
                    </div>
                } {
                </div>
                <SentEmailView eName={email.name} eDate={email.date_created} eAddress={email.address}  eSubject={email.subject} eBody={email.body}/>
            </div>
        </div>
        )
            }
    

    export default SentList;
