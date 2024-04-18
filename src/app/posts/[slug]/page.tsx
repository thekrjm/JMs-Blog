import MarkdownViewer from '@/components/MarkdownViewer';
import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/Posts';
import Image from 'next/image';
import { FaRegCalendarAlt } from 'react-icons/fa';

type Props = {
  params: { slug: string };
};

const DetailPostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  const { title, description, date, path, content } = post;
  return (
    <article className='rounded-2xl overflow-hidden bg-gray-50 shadow-lg m-4'>
      <Image
        className='w-full h-1/6'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
    </article>
  );
};

export default DetailPostPage;
