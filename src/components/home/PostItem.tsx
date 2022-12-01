import { NextPage } from "next";
import IPostProps from "@data/PostProps";
import { useState } from "react";
import styles from '@styles/home/PostItem.module.css';

/**
 * Layout for the single Post Item
 * 
 * 
 * @param {post} PostProps Post data
 * @param {favorite} boolean `true` when its display on `favorite` page
*/
const PostItem: NextPage<{ post: IPostProps, favorite: boolean }> = ({ post, favorite }) => {
  // `loading` state sets `true` whenever API request called.
  const [loading, setLoading] = useState(false);

  // `like` state value keeps track of every `post_item` like state.
  const [like, setLike] = useState(post.liked);

  // `hide` state value changes whenever user unlike a `post_item`.
  // `hide` value uses only in `favorites` page.
  const [hide, setHide] = useState(false);

  // `onLikeClicked` triggers whenever user click on like button.
  // It sends a post request to server to change like status.
  const onLikeClicked = async () => {
    // Change `loading` state `true`
    setLoading(true);

    // Check weather the app hosted or not in environment variables.
    // `host_url` has the hosted server url
    // `dev_url` has the local server url

    const value = String(!like);

    const path = `/api/posts/${post.id}/like/${value}/1`;

    // Send values to server
    const res = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    }).then(data => data.json());
    setLike(!like);

    // Change `loading` state `false`
    setLoading(false);

    // Checking whether its on `favorite` page.
    if (favorite) {
      // Hides the post item when user dislike the `post_item`.
      setHide(true);
    }
  }

  return (
    <div key={post.id} className={`${styles.post_item} ${hide ? styles.hidden : ''}`}>
      <div className={styles.top}>
        <img src={post.profile_image_url} className={styles.profile_image} alt="Post owner profile image" />
        <p className={styles.username}>{post.added_by}</p>
        <p className={styles.time}>2 hours ago</p>
        <p className={styles.menu}>
          <i className="fa fa-ellipsis-v"></i>
        </p>
      </div>
      <div className={styles.photo}>
        <img src={post.image_url} className={styles.post_image} alt="Post image" />
        <span className={`${styles.like_button} ${loading ? styles.loading : ''}`} onClick={onLikeClicked}>
          <i className={`${like ? 'fas' : 'far'} fa-heart`}></i>
        </span>
      </div>
      <div className={styles.end}>
        <i className={`fas fa-heart ${styles.like}`}></i>
        <p className={styles.like_count}>5 likes</p>
        <p className={styles.content}>{post.content}</p>
        <div className={styles.comments}>
          <i className="fas fa-chevron-down icon"></i>
          <p className={styles.text}>View Comments</p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;