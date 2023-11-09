"use client"
import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css'

function ContactForm() {
  const [sendNotification,setSendNotification]=useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { user_name, user_email, message } = event.target as HTMLFormElement;
    const currentForm = formRef.current;
    if (currentForm == null) return;
    console.log(currentForm)
    emailjs.sendForm('service_t2kf6m8', 'template_rrrx3jd', currentForm, 'E0NonDtUv7FN-lbRS')
      .then((result) => {
       setSendNotification(true)
        console.log(result.text);
        setTimeout( ()=>{setSendNotification(false)}, 2000);
      }, (error) => {
        console.log(error.text);
      });
    formRef.current?.reset()
  }
  return (
    <div className='lg:w-[60%] w-[95%] h-[70vh] bg-gray-900 mt-3 rounded-xl shadow-xl flex items-center justify-center pt-3'>
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className='w-[450px] flex flex-col p-3 h-[100%]  justify-center'>
        <label className='text-gray-200 mb-1'>Name</label>
        <input
          className='w-full h-[50px] rounded-sm outline-none px-3 text-lg text-gray-600'
          type="text"
          name="user_name"
          required
          placeholder='Nombre(s) y apellidos' />
        <label className='text-gray-200 mt-3 mb-1'>Email</label>
        <input
          className='w-full h-[50px] rounded-sm outline-none px-3 text-lg text-gray-600'
          type="email"
          name="user_email"
          required
          placeholder='Email de contacto' />
        <label className='text-gray-200 mt-3 mb-1'>Message</label>
        <textarea
          className='w-full min-h-[15vh] rounded-sm outline-none p-2 text-lg text-gray-700 resize-none'
          name="message"
          required
          placeholder='Mensaje a enviar' />
        <input
          className='w-full p-2 bg-gray-200 rounded-3xl my-5 h-[50px] font-semibold cursor-pointer hover:bg-gray-50 transition-all shadow-sm hover:shadow-md shadow-gray-500' type="submit"
          value="Send" />
           <div className={`${styles.snackbar} ${sendNotification? `${styles.show} bg-green-500`:"hidden"}`}>Mensaje enviado correctamente...</div> 
      </form>




    </div>
  )
}

export default ContactForm



