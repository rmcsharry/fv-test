import { Box, Paper, Typography } from '@mui/material';

type Comment =   {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type PostsRepository = {
  userId: number;
  id: number;
  title: string;
  body: string;
  commentsCount?: number;
  comments?: Comment[];
}


export async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch");

  const posts: PostsRepository[] = await res.json();

  const postsWithComments = await Promise.all(posts.map(async (post) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    const comments = await res.json();
    return { ...post, commentsCount: comments.length };
  }));

  return postsWithComments;
}

export const metadata = {
  title: 'Example Feed of Posts',
  description: 'This is an example feed of posts returned from jsonplaceholder.typicode.com',
}

const Feed = async () => {
  const posts: PostsRepository[] = await getPosts();
  
  return (
    <main>
      {posts?.length === 0 && <h1>Loading...</h1>}
      {posts?.map((post) => (
        <Box key={post.id} padding={2}>
          <Paper sx={{padding: 2}}>
            <Typography variant="h5">{post.title}</Typography>
            <Typography>{post.body}</Typography>
            {post.commentsCount && post.commentsCount > 0 && <Typography>{post.commentsCount} comments</Typography>}
          </Paper>
        </Box>
      ))}
    </main>
  );
};

export default Feed;
