
import { Box, Paper, Typography } from '@mui/material';
import { Post } from '../types/Post';
import { getPosts } from '../services/getPosts';

const Posts = async () => {
  const posts: Post[] = await getPosts();
  
  return (
    <main>
      {posts?.length === 0 && <h1>Loading...</h1>}
      {posts?.map((post) => (
        <Box key={post.id} padding={2}>
          <Paper sx={{padding: 2}}>
            <Typography variant="h5">{post.title}</Typography>
            <Typography>{post.body}</Typography>
            {post.commentsCount && post.commentsCount > 0 &&
                <Typography>{post.commentsCount} comments</Typography>
            }
          </Paper>
        </Box>
      ))}
    </main>
  );
};

export default Posts;