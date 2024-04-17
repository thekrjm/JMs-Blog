import path from 'path';
import { promises as fs, readFile } from 'fs';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string };

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}
export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(filePath, 'utf-8');

  return JSON.parse(data);
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const metaData = await getAllPosts().then((posts) =>
    posts.find((posts) => posts.path === fileName),
  );

  if (!metaData) {
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);
  }
  const content = await fs.readFile(filePath, 'utf-8');

  return { ...metaData, content };
}
