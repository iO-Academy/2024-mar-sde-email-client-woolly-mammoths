import React from 'react';
import PropTypes from 'prop-types';

function EmailItem({ name, subject, body, date }) {
    const cs = 'bg-white p-[10px] border-2 border-black hover:bg-blue-500';

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
            </div>
        </div>
    );
}

EmailItem.propTypes = {
    name: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default EmailItem;
