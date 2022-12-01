import { GetServerSideProps, NextPage } from "next";
import Meta from "@components/Meta";
import Posts from "@components/home/Posts";
import IPostProps from "@data/PostProps";
import styles from '@styles/favorites/Favorites.module.css';

/**
 *  Layout for the Favorite page
 * 
 * 
 * @param {posts} IPostProps[] List of liked posts
*/
const Favorites: NextPage<{ posts: IPostProps[] }> = ({ posts }) => {
    return (
        <>
            <Meta title="Favorite Posts - Deadpool Social Media" />
            <div className={styles.container}>
                <h1 className={styles.title}>Favorite Posts</h1>
                <Posts posts={posts} favorite={true} />
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const isHosted = (process.env.HOSTED === 'true');
    const baseUrl = isHosted ? process.env.HOST_URL : process.env.DEV_URL;

    // Retrieve Liked Posts data
    const res = await fetch(`${baseUrl}/api/users/1/liked-posts`).then(data => data.json());
    const posts = res.data;

    return {
        props: {
            posts: posts
        },
    };
}

export default Favorites;