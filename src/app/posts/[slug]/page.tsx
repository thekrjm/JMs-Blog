import MarkdownViewer from '@/components/MarkdownViewer';
import { getPostData } from '@/service/Posts';
import Image from 'next/image';
import { FaRegCalendarAlt } from 'react-icons/fa';

type Props = {
  params: { slug: string };
};

const DetailPostPage = async ({ params: { slug } }: Props) => {
  const { title, description, date, path, content } = await getPostData(slug);

  return (
    <article className='rounded-2xl overflow-hidden bg-gray-50 shadow-lg m-4'>
      <Image
        className='w-full h-1/6'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className='flex flex-col p-4'>
        <div className='flex items-center self-end text-sky-600'>
          <FaRegCalendarAlt />
          <p className='font-semibold ml-2'>{date.toString()}</p>
        </div>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-xl font-bold'>{description}</p>
        <div className='w-44 border-2 border-sky-600 mt-4 mb-8' />
        <MarkdownViewer content={content}></MarkdownViewer>
      </section>
    </article>
  );
};

export default DetailPostPage;
