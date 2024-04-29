import EmailItem from "../EmailItem/EmailItem"
import EmailString from "../EmailString"
import { useEffect, useState } from "react"

function EmailList() {

    const [emailString, setEmailString] = useState(false)

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

    return (
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
    )
  }
  
  export default EmailList