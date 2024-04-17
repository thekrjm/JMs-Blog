import { Post } from '@/service/Posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = { post: Post };

const PostCard = ({
  post: { title, description, date, category, path },
}: Props) => {
  return (
    <article className='rounded-md overflow-hidden shadow-md hover:shadow-xl'>
      <Link href={`/posts/${path}`}>
        <Image
          className='w-full'
          src={`/images/posts/${path}.png`}
          alt='title'
          width={300}
          height={200}
        />
        <div className='flex flex-col items-center p-4'>
          <time className='self-end text-gray-700'>{date.toString()}</time>
          <h3 className='text-lg font-bold'>{title}</h3>
          <span className='w-full truncate text-center'>{description} </span>
          <span className='text-sm rounded-lg bg-green-100 px-2 my-2'>
            {category}
          </span>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
