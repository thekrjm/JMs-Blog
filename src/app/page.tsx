import CarouselPosts from '@/components/CarouselPosts';
import FeaturedPosts from '@/components/FeaturedPosts';
import Hero from '@/components/Hero';

export default async function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Server Component */}

      <FeaturedPosts />
      {/* @ts-expect-error Server Component */}

      <CarouselPosts />
    </>
  );
}
