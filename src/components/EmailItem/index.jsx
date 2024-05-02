import React, { useState } from "react";

function EmailItem({
  content,
  address,
  name,
  subject,
  body,
  date,
  id,
  myFunction,
  read,
}) {
  const [dateObj, setDateObj] = useState(new Date(date).toLocaleDateString());

  const readClassNames =
    read === "1" ? "bg-slate-50 text-black" : "bg-gray-500 text-white";

  return (
    <button
      id={id}
      onClick={myFunction}
      data-id={id}
      data-content={content}
      data-address={address}
      data-name={name}
      data-subject={subject}
      data-body={body}
      data-date={date}
      data-read={read}
      className="w-full"
    >
      <div
        className={`${readClassNames} p-2.5 border-b border-r border-gray-200 hover:bg-blue-500`}
      >
        <div className="flex justify-between">
          <div className="flex flex-col text-left">
            <p className="text-xl font-bold">{name}</p>
            <p>{subject}</p>
            <p>{body}</p>
          </div>
          <div className="flex flex-col text-right">
            <p className="font-bold">{dateObj}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default EmailItem;
