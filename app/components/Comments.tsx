import { useState } from 'react';
import { Comment } from '../types/Comment';
import Posts from './Posts v1';

const Comments = ({ comments }: { comments: Comment[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Posts />
      <details open={isOpen}>
        <summary onClick={handleClick}>{comments.length} comments</summary>
        {isOpen && comments.map((comment) => (
          <div key={comment.id}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
          </div>
        ))}
      </details>
    </>
  );
};

export default Comments;