import EmailItem from "../EmailItem";
import { useEffect, useState } from "react"
import EmailView from "../EmailView";

function EmailList() {

    const [emailArray, setEmailArray] = useState(false);
    const [refreshJson, setRefreshJson] = useState(false);
    const [currentEmail, setCurrentEmail] = useState('');
    const [buttonClass, setButtonClass] = useState("hidden");
    const [currentID, setCurrentID] = useState(0)
    

    useEffect(() => {
        fetch("https://email-client-api.dev.io-academy.uk/emails")
        .then(response => response.json())
        .then((data) => {
            setEmailArray(data);
            setRefreshJson(false);
            return emailArray;
        })
    }, [refreshJson])

 



    //SETS EMAIL TO READ
    function setRead(id) {
        fetch("https://email-client-api.dev.io-academy.uk/emails/" + id, {
            method: "PUT"
        })
        setRefreshJson(true);
        
    }


    // const openEmail = (event) => {
    //     setRead(event.currentTarget.dataset.id);
    //     console.log(event.currentTarget.dataset.id)
    //     setCurrentID(event.currentTarget.dataset.id);
    // }

    return (
        <div>
        
            <div className="flex w-full justify-between">
                <div className="overflow-scroll max-h-screen w-2/6 border-2 border-black">
                {
                    emailArray &&
                    <div>
                        {emailArray.data.map(email => {
                            return (
                                <EmailItem data={email} key={email.id} setCurrentId={setCurrentID} />
                            )
                        })}
                    </div>
                }
                </div>

                <EmailView id={currentID} />
                   
                
            </div>
        </div>
    ) 
    
}

export default EmailList