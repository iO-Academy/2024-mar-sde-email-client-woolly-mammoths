import EmailItem from "../EmailItem";
import { useEffect, useState } from "react";
import EmailView from "../EmailView";

function EmailList() {
  const [emailArray, setEmailArray] = useState(false);
  const [refreshJson, setRefreshJson] = useState(false);
  const [currentID, setCurrentID] = useState(0);

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails")
      .then((response) => response.json())
      .then((data) => {
        setEmailArray(data);
        setRefreshJson(false);
        return emailArray;
      });
  }, [refreshJson]);

    //To pass into email view

    const [buttonClass, setButtonClass] = useState("hidden");
    const [mobileView, setMobileView] = useState(false);
    const [emailViewHidden, setEmailViewHidden] = useState(false);
    const [emailListHidden, setEmailListHidden] = useState(false);
    const [emailListClasses, setEmailListClasses] = useState("flex w-full justify-between");

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
            setEmailListClasses("w-full h-screen");
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

  function setRead(id) {
    fetch("https://email-client-api.dev.io-academy.uk/emails/" + id, {
      method: "PUT",
    });
    setRefreshJson(true);
  }

  return (
    <div>
      <div className={emailListClasses}>
        <div className="w-full md:w-2/6 overflow-scroll max-h-screen">
          {(emailArray && !emailListHidden) &&
            <div>
              {emailArray.data.map((email) => {
                return (
                  <EmailItem
                    data={email}
                    key={email.id}
                    setCurrentId={setCurrentID}
                    setRead={setRead}
                  />
                );
              })}

            </div>
          }
        </div>

        <EmailView id={currentID} myFunction={closeEmail} buttonClass={buttonClass} hidden={emailViewHidden}/>
      </div>
    </div>
  );
}

export default EmailList;
