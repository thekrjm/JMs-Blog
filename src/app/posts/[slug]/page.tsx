import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/Posts';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { title, description } = await getPostData(slug);
  return { title, description };
}

const DetailPostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-50 shadow-lg m-4">
      <Image
        className="w-full h-1/6"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
};

export default DetailPostPage;
