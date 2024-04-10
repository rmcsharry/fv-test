import { Box, Paper, Typography } from '@mui/material';

type PostsRepository = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

const Feed = async () => {
  const posts: PostsRepository[] = await getPosts();
  console.log(posts);
  return (
    <main>
      {posts?.length === 0 && <h1>Loading...</h1>}
      {posts?.map((post) => (
        <Box key={post.id} padding={2}>
          <Paper sx={{padding: 2}}>
            <Typography variant="h5">{post.title}</Typography>
            <Typography>{post.body}</Typography>
          </Paper>
        </Box>
      ))}
    </main>
  );
};

export default Feed;
