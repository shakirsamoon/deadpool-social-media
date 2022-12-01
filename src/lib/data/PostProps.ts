/**
 * Interface Class for Posts
 *
 */
interface IPostProps {
  id: number;
  content: string;
  image_url: string;
  liked: boolean;
  added_by: string;
  profile_image_url: string;
}

export default IPostProps;
