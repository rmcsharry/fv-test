// Posts.tsx (server component)
import { getPosts } from '../services/getPosts';
import { Post } from '../types/Post';

const Posts = async () => {
  const posts: Post[] = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} dangerouslySetInnerHTML={{ __html: `<PostWithComments post=${JSON.stringify(post)} />` }} />
      ))}
    </div>
  );
};

export default Posts;
