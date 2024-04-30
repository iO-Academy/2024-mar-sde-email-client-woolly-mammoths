import EmailList from '../EmailList/EmailList'
import EmailString from '../EmailString'
import { useEffect, useState } from 'react';


const Inbox = () => {
    return (
        <div className="flex">
            <div className="w-2/4">
                <EmailList/>
            </div>
            <div className="w-2/4">
                <EmailString />
            </div>
        </div>
    )
}

export default Inbox