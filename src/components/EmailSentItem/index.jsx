import React from 'react';


function EmailSentItem({content, address, name, subject, body, date, id}) {

    let cs = 'bg-gray-100 p-[10px] border-2 border-black hover:bg-blue-500 text-left';
    // let isRead = 'UNREAD';

    // if (read == 1) {
    //     cs = 'bg-gray-500 p-[10px] border-2 border-black hover:bg-blue-500 text-white text-left';
    //     isRead = 'READ';
    

    return (
            <div className={cs}>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                    
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
    );
}

export default EmailSentItem;
