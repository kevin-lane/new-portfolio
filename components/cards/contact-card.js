'use client';
import React from 'react';
import Image from 'next/image';
import GeoFilled from '@/public/geo_filled.svg';
import GeoWhite from '@/public/geo_white.svg';
import EmailFilled from '@/public/email_filled.svg';
import EmailWhite from '@/public/email_white.svg';
import TelephoneFilled from '@/public/telephone_filled.svg';
import TelephoneWhite from '@/public/telephone_white.svg';
import LanguageIcon from '@/public/language.svg';
import LanguageIconWhite from '@/public/language_white.svg';
import { LanguageContext } from '@/components/providers/language-provider';
import { ThemeContext } from '../providers/theme-provider';
import { useContext } from "react";

export default function ContactCard({location, email, phoneNumber, languages}) {
  const { language, setLanguage } = useContext(LanguageContext);
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div className=''>
      <p className='flex justify-between mb-8'>
        <Image className='mr-4 ml-8 max-[400px]:ml-12' src={dark ? GeoWhite : GeoFilled} alt='location filled' />
        <span className='flex-1 mr-20'>{language === 'sv' ? 'Plats:' : 'Location:'}</span>
        <a className='underline mr-4' href={`https://www.google.com/maps/place/${location}`}>{location}</a>
      </p>

      <p className='flex justify-between mb-8'>
        <Image className='mr-4 ml-8 max-[400px]:ml-12' src={dark ? EmailWhite : EmailFilled} alt='location filled' />
        <span className='flex-1 mr-20'>{language === 'sv' ? 'Epost:' : 'Email:'}</span>
        <a className='underline mr-4' href={`mailto:${email}`}>{email}</a>
      </p>

      <p className='flex justify-between mb-8 '>
        <Image className='mr-4 ml-8 max-[400px]:ml-12' src={dark ? TelephoneWhite : TelephoneFilled} alt='location filled' />
        <span className='flex-1 mr-20'>{language === 'sv' ? 'Telefonnummer:' : 'Telephone number:'}</span>
        <a className='underline mr-4' href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </p>

      <p className='flex justify-between mb-8'>
        <Image className='mr-4 ml-8 max-[400px]:ml-12' src={dark ? LanguageIconWhite : LanguageIcon} alt='location filled' />
        <span className='flex-1 mr-20'>{language === 'sv' ? 'Språk:' : 'Languages:'}</span>
        <a className='mr-4'>{languages}</a>
      </p>
    </div>
  )
}
