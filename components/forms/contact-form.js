'use client'
import React from 'react'

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Message has been sent!");

  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-5'>
        <label className='ml-8 max-[400px]:ml-12' htmlFor="name">Name</label><br/>
        <input className='w-80 p-3 border border-indigo-300 rounded mt-2 ml-8 max-[400px]:ml-12' type="text" id='name' name="name"  placeholder='Name' required/><br/>
      </div>

      <div className='mb-5'>
        <label className='ml-8 max-[400px]:ml-12' htmlFor="email">Email</label><br/>
        <input className='w-80 p-3 border border-indigo-300 rounded mt-2 ml-8 max-[400px]:ml-12' type="email" name="email" placeholder='Email' required/><br/>
      </div>

      <div className='mb-5'>
        <label className='ml-8 max-[400px]:ml-12' htmlFor="message">Message</label><br/>
        <textarea className='w-80 p-3 h-32 border border-indigo-300 rounded mt-2 ml-8 max-[400px]:ml-12' id='message' name='message' placeholder='Your message' required></textarea><br/>
      </div>
      <button className='w-40 h-12 ml-8 mb-8 max-[400px]:ml-12 bg-blue-700 text-white font-semibold rounded' type="submit">Send</button>
    </form>
  )
}
