import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Posts from '../components/Posts';
import { getPosts } from '../services/getPosts';

export const metadata = {
  title: 'Example Feed of Posts',
  description: 'This is an example feed of posts returned from jsonplaceholder.typicode.com',
}

const Feed = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });
  
  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Posts />
      </HydrationBoundary>
    </main>
  );
};

export default Feed;
