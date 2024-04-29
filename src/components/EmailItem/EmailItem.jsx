import { useState } from 'react'

function EmailItem({myStyle = "unread", data = null}) {

    let cs = 'bg-white p-[10px] border-2 border-black hover:bg-blue-500'
    let name = "Name";
    let subject = "Subject";
    let preview = "Preview...";
    let date = "DD/MM/YYYY";
    let id = null;


    cs = 'bg-white-500 p-[10px] border-2 border-black hover:bg-blue-500 ';

    return (
        <div className={cs}>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p>{data.name}</p>
                    <p>{data.subject}</p>
                    <p>{data.body}</p>
                </div>
                <div className='flex flex-col'>
                    <p>{data.date_created}</p>
                </div>
                
            </div>

        </div>
    )
}

export default EmailItem
