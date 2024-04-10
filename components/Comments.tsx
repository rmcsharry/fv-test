"use client"

import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Comment } from '../types/Comment';

const Comments = ({ comments }: { comments: Comment[] }) => {

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
              <>
                <div key={comment.id}>
                  <h4>{comment.name}</h4>
                  <p>{comment.body}</p>
                  <p>{comment.email}</p>
                </div>
                <Divider />
              </>
            ))}
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

export default Comments;