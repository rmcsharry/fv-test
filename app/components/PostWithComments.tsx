// PostWithComments.tsx (client component)
import { useState } from 'react';
import Comments from './Comments';
import { Post as PostType } from '../types/Post';
import Post from './Post';

const PostWithComments = ({ post }: { post: PostType }) => {
  const [showComments, setShowComments] = useState(false);

  const handleClick = () => {
    setShowComments(!showComments);
  };

  return (
    <div>
      <Post post={post} />
      <div onClick={handleClick}>
        {showComments ? <Comments comments={post.comments} /> : null}
      </div>
    </div>
  );
};

export default PostWithComments;