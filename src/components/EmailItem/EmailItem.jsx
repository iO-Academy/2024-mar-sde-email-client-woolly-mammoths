import { useState } from 'react'

function EmailItem({myStyle = "unread"}) {

  

    let cs = 'bg-white p-[10px] border-2 border-black w-[300px] hover:bg-blue-500'
    let name = "Name";
    let subject = "Subject";
    let preview = "Preview...";
    let date = "DD/MM/YYYY";

    if (myStyle === "read"){
        cs = 'bg-gray-700 p-[10px] border-2 border-black text-white hover:bg-blue-500 '
    }



    return (
        <div className={cs}>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p>{name}</p>
                    <p>{subject}</p>
                    <p>{preview}</p>
                </div>
                <div className='flex flex-col'>
                    <p>{date}</p>
                </div>
                
            </div>

        </div>
    )
}

export default EmailItem
