import React from 'react'
import Image from 'next/image'
// Use a relative path for public assets with the 'Image' component
const fImage = '/footerr.jpg';

export default function ContactPic() {
  return (
    <div>
         <Image
        src={fImage}
        alt="Mountain"
        width={500}
        height={300}
        className="w-full relative h-[85vh] object-cover block"
      />
    </div>
  )
}
