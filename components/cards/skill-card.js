import React from 'react';
import Image from "next/image";

export default function SkillCard({skill, src, alt}) {
  return (
    <div>
      <Image className="inline" src={src} width={40} height={40} alt={alt}/>
      <p className='font-semibold text-center'>{skill}</p>
    </div>
  )
}
