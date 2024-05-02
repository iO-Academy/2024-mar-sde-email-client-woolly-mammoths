import EmailSentItem from "../EmailSentItem";
import { useEffect, useState } from "react";

function SentList() {
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails/sent")
      .then((response) => response.json())
      .then((data) => {
        console.log("Sent Emails:", data);
        setEmailSent(data);
        return emailSent;
      });
  }, []);

  return (
    <div>
      <div className="overflow-scroll max-h-screen w-full">
        {emailSent && (
          <div>
            {emailSent.data.map((email) => {
              return (
                <EmailSentItem
                  data={email}
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

export default SentList;
