"use client"

import { useState } from 'react';
import { Comment } from '../types/Comment';
import { Box, Typography } from '@mui/material';

const Comments = ({ comments }: { comments: Comment[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {comments && (
        <Box>
          <Typography onClick={handleClick}>{comments.length} comments</Typography>
          <details open={isOpen}>
            {isOpen && comments.map((comment) => (
              <div key={comment.id}>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
              </div>
            ))}
          </details>
        </Box>
      )}
    </>
  );
};

export default Comments;