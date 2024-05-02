import { useState, useEffect } from "react";

const SentEmailView = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails/sent" + id)
      .then((response) => response.json())
      .then((data3) => {
        setData(data3.data.email);
      });
  }, [id]);

  return (
    <div className="border-t-2 border-b-2 mx-5 my-5 w-4/6 h-fit">
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

export default SentEmailView;