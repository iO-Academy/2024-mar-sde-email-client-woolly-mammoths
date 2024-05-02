import React from 'react';

function EmailSentItem({myStyle = "unread", data= null, name, subject, body, date}) {

    let cs = 'bg-gray-500 text-white p-[10px] border-b border-white hover:bg-blue-500';

    return (
        <div className={cs}>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p className='text-xl font-bold'>{name}</p>
                    <p>{subject}</p>
                    <p>{body}</p>
                </div>
                <div className='flex flex-col text-right'>
                    <p className='font-bold'>{date}</p>
                </div>
            </div>
        </div>
    );
}

export default EmailSentItem;
