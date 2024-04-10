import Posts from '../components/Posts v1';

export const metadata = {
  title: 'Example Feed of Posts',
  description: 'This is an example feed of posts returned from jsonplaceholder.typicode.com',
}

const Feed = async () => {
  
  return (
    <main>
      <Posts />
    </main>
  );
};

export default Feed;
