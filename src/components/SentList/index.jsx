import SentEmailItem from "../SentEmailItem"
import { useEffect, useState } from "react";
import SentEmailView from "../SentEmailView";

function SentEmailList() {
  const [sentEmailArray, setSentEmailArray] = useState(false);
  const [refreshJson, setRefreshJson] = useState(false);
  const [sentCurrentID, setSentCurrentID] = useState(0);

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails/sent")
      .then((response) => response.json())
      .then((data) => {
        setSentEmailArray(data);
        setRefreshJson(false);
        return sentEmailArray;
      });
  }, [refreshJson]);

  function setRead(id) {
    fetch("https://email-client-api.dev.io-academy.uk/emails/" + id, {
      method: "PUT",
    });
    setRefreshJson(true);
  }

  return (
    <div>
      <div className="flex w-full justify-between">
        <div className="overflow-scroll max-h-screen w-2/6 border-2 border-black">
          {sentEmailArray && (
            <div>
              {sentEmailArray.data.map((email) => {
                return (
                  <SentEmailItem
                    data={email}
                    key={email.id}
                    setSentCurrentId={setSentCurrentID}
                    setRead={setRead}
                  />
                );
              })}
            </div>
          )}
        </div>

        <SentEmailView id={sentCurrentID} />
      </div>
    </div>
  );
}

export default SentEmailList;
