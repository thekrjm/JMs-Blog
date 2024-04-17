import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className='text-center'>
      <Image
        src='/images/profile.jpg'
        alt='profile'
        width={250}
        height={250}
        className='rounded-full grayscale mx-auto'
        priority
      />
      <h2 className='text-3xl font-bold mt-2'>Hi, I'm JM</h2>
      <h3 className='text-xl font-semibold'>Front-end Engineer</h3>
      <p>코딩 시작하는 사람, JM</p>
      <Link href='/contact'>
        <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>
          Contact Me
        </button>
      </Link>
    </section>
  );
};

export default Hero;
