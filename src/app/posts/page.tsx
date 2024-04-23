import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/Posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '풀스택 관련 블로그 글',
};

const PostsPage = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
};

export default PostsPage;
