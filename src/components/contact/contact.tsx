import React from 'react'
import ContactForm from './contactform';
import ContactSocialMedia from './contactsocialmedia';
function Contact() {
    return (
        <section id='contactme' className="w-full h-[100vh] flex items-center justify-center">
            <div className='w-full min-h-[80vh] bg-gray-100 rounded-xl flex items-center justify-center flex-col p-5'>
                <h5 className="w-full flex items-center justify-center text-[2.2em] font-bold text-gray-800 mt-7">Contact me</h5>
                <ContactForm />
                <ContactSocialMedia />
            </div>
        </section>
    )
}

export default Contact