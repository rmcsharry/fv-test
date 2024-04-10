import { Post as PostType } from '../types/Post';

const Post = ({ post }: { post: PostType }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div data-post-id={post.id}>{post.comments.length} comments</div>
    </div>
  );
};

export default Post;