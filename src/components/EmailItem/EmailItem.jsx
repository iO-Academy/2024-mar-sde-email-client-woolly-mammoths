import React from 'react';

function EmailItem({content, address, name, subject, body, date, id, myFunction, read}) {

    let cs = 'bg-white p-[10px] border-2 border-black hover:bg-blue-500';

    if (read == 1) {
        cs = 'bg-gray-500 p-[10px] border-2 border-black hover:bg-blue-500';
    }

    return (
        <button id={id} onClick={myFunction} data-id={id} data-content={content} data-address={address} data-name={name} data-subject={subject} data-body={body} data-date={date} data-read={read}>
            <div className={cs}>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <p>{name}</p>
                        <p>{subject}</p>
                        <p>{body}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </button>
    );
}

export default EmailItem;
