import React from 'react';
import DeleteButton from '../DeleteButton';

function EmailItem({myStyle = "unread", data= null, name, subject, body, date, id, handleDelete}) {

    let cs = 'bg-white p-[10px] border-2 border-black hover:bg-blue-500';

    return (
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
                <div>
                    <DeleteButton id={id} handleDelete={handleDelete}/>

                </div>
            </div>
        </div>
    );
}

export default EmailItem;
