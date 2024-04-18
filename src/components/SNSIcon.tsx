import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SNSIcon = () => {
  return (
    <div className='flex'>
      <Link href='/contact'>
        <Image
          src='/images/sns/gitHub-icon.png'
          alt='gitHub'
          width={50}
          height={50}
        />
      </Link>
      <Link href='/contact'>
        <Image
          src='/images/sns/instagram-icon.webp'
          alt='instagram'
          width={50}
          height={50}
        />
      </Link>
      <Link href='/contact'>
        <Image
          src='/images/sns/youtube-icon.png'
          alt='youtube'
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
};

export default SNSIcon;
