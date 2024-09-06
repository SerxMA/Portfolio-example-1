import React from 'react';
import { CONTACT } from "../constants"

const Contact = () => {
    return (
        <div className=' pb-20 border-b border-neutral-900'>
            <h2 className='my-10 text-center text-4xl'>Get in touch</h2>
            <div className='text-center tracking-tighter'>
                <p className='my-4'>{CONTACT.address}</p>
                <p className='my-4'>{CONTACT.phoneNo}</p>
                <p className='my-4'>{CONTACT.email}</p>
                <a href="#" className='border-b '></a>
            </div>
        </div>
    );
};

export default Contact;