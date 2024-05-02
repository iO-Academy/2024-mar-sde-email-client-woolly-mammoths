import { useEffect, useState } from "react"

import React, { useState, useEffect } from 'react';
import EmailSentItem from './EmailSentItem';

function SentList() {
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        fetch("https://email-client-api.dev.io-academy.uk/emails/sent")
            .then(response => response.json())
            .then(data => {
                setEmailSent(data.data);
            });
    }, []);

    return (
        <div>
            <div className="">
                <div className="overflow-scroll h-[720px] w-[400px]">
                    {emailSent && (
                        <div>
                            {emailSent.map(email => (
                                <EmailSentItem
                                    key={email.id}
                                    data={email}
                                    address={email.email}
                                    name={email.name}
                                    subject={email.subject}
                                    body={email.body}
                                    date={email.date_created}
                                    id={email.id}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SentList;

