import { Post } from '../types/Post';

export async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch");

  const posts: Post[] = await res.json();

  const postsWithComments = await Promise.all(posts.map(async (post) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    const comments = await res.json();
    return { ...post, comments };
  }));

  return postsWithComments;
}