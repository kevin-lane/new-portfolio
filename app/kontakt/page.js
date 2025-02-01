import ContactForm from '@/components/forms/contact-form';
import ContactCard from '@/components/cards/contact-card';

export default function Kontakt() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <article>
        <h1 className="font-black mb-8 mt-20 text-3xl w-96 max-[400px]:ml-12">KONTAKTA MIG</h1>
        <p className="mb-8 w-96  max-[400px]:w-80  max-[400px]:ml-12">Vill ni anställa mig inför ert nästa projekt eller bara snacka?<br></br>Tveka då inte att höra av dig till mig, så kan vi snacka om vad jag kan erbjuda.</p>
        <section className='inline-flex mt-4 items-center md:space-x-20 max-md:inline-block max-md:space-y-12'>
          <ContactCard
            location='Stockholm, Sverige'
            email='kevinlane3@hotmail.com'
            phoneNumber='+46 73 907 64 61'
            languages='Svenska, Engelska'
          />
          <ContactForm />
        </section>
      </article>
    </section>
  );
}
