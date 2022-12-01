import { NextPage } from "next";
import styles from "@styles/home/NewPost.module.css";

/**
 * Layout for Add New Post block
 * 
*/
const NewPost: NextPage = () => {
  return (
    <div className={styles.new_post}>
      <div className={styles.post}>
        <p >{`What's on your mind?`}</p>
      </div>
      <a className={styles.submit} >Post</a>
    </div>
  );
}

export default NewPost;