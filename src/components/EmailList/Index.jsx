import EmailItem from "./EmailItem";
import { useEffect, useState } from "react";

function EmailList() {
  const [emailsOverview, setEmailsOverview] = useState(false);

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmailsOverview(data);
        return emailsOverview;
      });
  }, []);

  return (
    <div>
      <div className="overflow-scroll h-full w-full">
        {emailsOverview && (
          <div>
            {emailsOverview.data.map((email) => {
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
