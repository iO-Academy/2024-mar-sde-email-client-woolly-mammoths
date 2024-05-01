import { useEffect, useState } from "react";
import EmailItem from "../EmailItem/Index";

function EmailList() {
  const [emailArray, setEmailArray] = useState(false);

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmailArray(data);
        return emailArray;
      });
  }, []);

  return (
    <div>
      <div className="overflow-scroll max-h-screen w-full">
        {emailArray && (
          <div>
            {emailArray.data.map((email) => {
              return (
                <EmailItem
                  name={email.name}
                  subject={email.subject}
                  body={email.body}
                  date={email.date_created}
                  read={email.read}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default EmailList;
