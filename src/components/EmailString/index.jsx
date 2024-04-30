import { useEffect, useState } from "react"

const EmailString =() => {
    
    function fetchJSON() {
        const [emailString, setEmailString] = useState(false)

        useEffect(() => {
            fetch("https://email-client-api.dev.io-academy.uk/emails")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setEmailString(data)
            })
        }, [])
    }

    fetchJSON();
    

return (
    <div>
        {
            emailString &&
            <div>
                {emailString.data.map(email => {
                    return (
                        <div className="border-t-2 border-b-2 mx-5 my-5">
                            <div className="flex justify-between pt-5">
                            <h2 className="text-xl">{email.name}</h2>
                            <div className="font-bold text-xs">
                            {email.date_created}
                            </div>
                            </div>
                            <p className="text-xs">{email.email}</p>
                            <h1 className="text-2xl">{email.subject}</h1>
                            <div className="pt-8 pb-2">
                                {email.body}
                            </div>
                        </div>
                    )
                })}
            </div>
        }



    </div>
)
}


export default EmailString