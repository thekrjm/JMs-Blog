import { Post } from '@/service/Posts';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {
  post: Post;
  type: 'prev' | 'next';
};

const ARROW_ICON_CLASS =
  'text-5xl m-4 text-sky-400 transition-all group-hover:text-6xl';

const AdjacentPostCard = ({
  post: { path, title, description },
  type,
}: Props) => {
  return (
    <Link href={`/posts/${path}`} className='relative w-full bg-black max-h-56'>
      <Image
        className='w-full opacity-40'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className='group absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 flex w-full justify-around items-center text-white px-8'>
        {type === 'prev' && <FaArrowLeft className={ARROW_ICON_CLASS} />}
        <div className='w-full text-center'>
          <h3 className='text-xl font-bold'>{title}</h3>
          <p className='font-bold'>{description}</p>
        </div>
        {type === 'next' && <FaArrowRight className={ARROW_ICON_CLASS} />}
      </div>
    </Link>
  );
};

export default AdjacentPostCard;
