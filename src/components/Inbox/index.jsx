import EmailList from '../EmailList'
import EmailString from '../EmailString'
import { useEffect, useState } from 'react';


const Inbox = () => {
    return (
        <div className="flex">
            <div className="w-full">
                <EmailList/>
            </div>
            <div className="">
                {/* <EmailString /> */}
            </div>
        </div>
    )
}

export default Inbox