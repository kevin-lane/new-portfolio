import ContactForm from '@/components/forms/contact-form';
import React from 'react';
import ContactCard from '@/components/cards/contact-card';

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <article>
        <h1 className="font-black mb-8 mt-8 text-3xl w-96 max-[400px]:ml-12">LET'S TALK</h1>
        <p className="mb-8 w-96  text-lg max-[400px]:ml-12">Want to work with me or just have a chat?<br></br> Please feel free to get in touch with me!</p>
        <section className='inline-flex mt-4 items-center md:space-x-20 max-md:inline-block max-md:space-y-12'>
          <ContactCard
            location='Stockholm, Sweden'
            email='kevinlane3@hotmail.com'
            phoneNumber='+46 73 907 64 61'
            languages='Swedish, English'
          />
          <ContactForm />
        </section>
      </article>
    </section>
  );
}
