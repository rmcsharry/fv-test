"use client"

import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../services/getPosts';
import { Box, Paper, Typography } from '@mui/material';
import Comments from './Comments';

const Posts = () => {
  const { data: posts, error, isFetched } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  return (
    <main>
      {posts?.length === 0 && <h1>Loading...</h1>}
      {posts?.map((post) => (
        <Box key={post.id} padding={2}>
          <Paper sx={{padding: 2}}>
            <Typography variant="h5">{post.title}</Typography>
            <Typography>{post.body}</Typography>
            
              <Comments comments={post.comments} />
            
          </Paper>
        </Box>
      ))}
    </main>
  );
};

export default Posts;
