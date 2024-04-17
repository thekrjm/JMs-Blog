import { getNonFeaturedPosts } from '@/service/Posts';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

const CarouselPosts = async () => {
  const posts = await getNonFeaturedPosts();
  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold mt-2'>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
};

export default CarouselPosts;
