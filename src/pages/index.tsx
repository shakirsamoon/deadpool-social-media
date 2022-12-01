import { GetServerSideProps, NextPage } from 'next';
import AdsBlock from '@components/home/AdsBlock';
import NewPost from '@components/home/NewPost';
import Posts from '@components/home/Posts'
import Profile from '@components/home/Profile';
import Stories from '@components/home/Stories';
import Meta from '@components/Meta';
import IPostProps from '@data/PostProps';
import IStoryProps from '@data/StoryProps';
import styles from '@styles/home/Home.module.css';

/**
 *  Layout for the Home page
 * 
 * 
 * @param {posts} IPostProps[] List of posts
 * @param {stories} IStoryProps[] List of Stories
*/
const Home: NextPage<{ posts: IPostProps[], stories: IStoryProps[] }> = ({ posts, stories }) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Profile />
        <Stories stories={stories} />
        <NewPost />
        <Posts posts={posts} favorite={false} />
        <AdsBlock />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isHosted = (process.env.HOSTED === 'true');
  const baseUrl = isHosted ? process.env.HOST_URL : process.env.DEV_URL;

  // Retrieve Posts data
  const resPosts = await fetch(`${baseUrl}/api/posts`).then(data => data.json());
  const posts = resPosts.data;
  
  // Retrieve Stories data
  const resStories = await fetch(`${baseUrl}/api/stories`).then(data => data.json());
  const stories = resStories.data;

  return {
    props: {
      posts,
      stories
    },
  };
}

export default Home;