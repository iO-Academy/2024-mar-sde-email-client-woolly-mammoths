import React from 'react';

function EmailItem({myStyle = "unread", data= null, name, subject, body, date, id, myFunction}) {

    let cs = 'bg-white p-[10px] border-2 border-black hover:bg-blue-500';

    return (
        <button id={id} onClick={myFunction} data-id={id}>
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
