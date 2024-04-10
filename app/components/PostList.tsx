"use client"

import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../services/getPosts';
import List from '@mui/material/List';
import PostItem from './PostItem';

const PostList = () => {
  const { data: posts, error, isFetched } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  return (
    <main>
      {posts?.length === 0 && <h1>Loading...</h1>}
      <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper', margin: 'auto' }}>
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </List>
    </main>
  );
};

export default PostList;
