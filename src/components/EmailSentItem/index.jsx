import React from 'react';


function EmailSentItem({content, address, name, subject, body, date, id, handleOpen, read}) {

    let cs = 'bg-gray-100 p-[10px] border-2 border-black hover:bg-blue-500 text-left';
    // let isRead = 'UNREAD';

    // if (read == 1) {
    //     cs = 'bg-gray-500 p-[10px] border-2 border-black hover:bg-blue-500 text-white text-left';
    //     isRead = 'READ';
    

    return (
        <button id={id} onClick={handleOpen} data-id={id} data-content={content} data-address={address} data-name={name} data-subject={subject} data-body={body} data-date={date} data-read={read}>
            <div className={cs}>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                    <button onClick={() => handleOpen(id)}></button>
                        <p>{name}</p>
                        <p>{subject}</p>
                        <p>{body}</p>
                    </div>
                    <div className='flex flex-col justify-between text-right'>
                        <p>{date}</p>
                        {/* <p>{isRead}</p> */}
                    </div>
                </div>
            </div>
        </button>
    );
}

export default EmailSentItem;