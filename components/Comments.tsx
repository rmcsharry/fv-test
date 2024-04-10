"use client"

import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Comment } from '../types/Comment';

const Comments = ({ comments }: { comments: Comment[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {comments && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>{comments.length} comments</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {comments.map((comment) => (
                <div key={comment.id}>
                  <h4>{comment.name}</h4>
                  <p>{comment.body}</p>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
      )}
    </>
  );
};

export default Comments;