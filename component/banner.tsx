import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-people.jpg')" }}
    >
   
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 max-w-3xl px-6 py-16 md:px-16 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          The <span className="text-orange-400">Local</span> <br />
          Travel <span className="text-white">Experts.</span>
        </h1>
        <p className="text-lg md:text-xl mb-4 text-gray-200">
          We specialize in eco-friendly and down-to-earth adventures, and we are
          committed to protecting the areas we explore.
        </p>
        <p className="text-base md:text-lg text-gray-300">
          Our knowledgeable guides are passionate about the outdoors and will help
          you make the most of your time in Nepal, whether you{' '}
          <span className="underline italic">continue reading</span>.
        </p>
      </div>

    
      <div className="relative z-10 md:pr-16 pb-10 md:pb-0">
        <Image
          src="/guide.jpg"
          alt="Mountain Guide"
          width={500}
          height={700}
          className="rounded-2xl shadow-2xl border-4 border-white object-cover"
        />
      </div>
    </div>
  )
}
