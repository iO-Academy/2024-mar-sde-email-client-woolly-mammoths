

import { useState, useEffect } from "react";
import "./style.css";

const EmailView = ({ id, myFunction, buttonClass, hidden }) => {
  const [data, setData] = useState(null);

  let cl = "mx-5 my-5 md:w-4/6 h-fit"

if (hidden == true){
    cl = "mx-5 my-5 h-fit hidden"
}

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails/" + id)
      .then((response) => response.json())
      .then((data2) => {
        setData(data2.data.email);
      });
  }, [id]);

  return (
    <div className={cl}>
        <div>
        <button onClick={myFunction} className={buttonClass}>CLOSE</button>
        </div>
      {data && (
        <>
          <div className="flex justify-between pt-3">
            <h2 className="text-xl font-semibold">{data.name}</h2>
            <div className="font-bold text-xs">
              {new Date(data.date_created).toLocaleDateString()}
            </div>
          </div>
          <p className="text-xs font-semibold my-2">{data.address}</p>
          <h1 className="text-2xl font-bold">{data.subject}</h1>
          <div className="pt-8 pb-2">{data.body}</div>
        </>
      )}
    </div>
  );
};

export default EmailView;
