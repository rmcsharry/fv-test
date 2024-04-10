import { ListItem, ListItemText, Typography } from '@mui/material';
import Comments from './Comments';
import { Post } from '../types/Post';

const PostItem = ({ post }: { post: Post }) => {
  return (
    <ListItem key={post.id} sx={{ padding: 2, border: 'solid 1px lightgrey', marginBottom: 2 }}>
      <ListItemText>
        <Typography variant="h5">{post.title}</Typography>
        <Typography>{post.body}</Typography>
        <Comments comments={post.comments} />
      </ListItemText>
    </ListItem>
  );
};

export default PostItem;