import { NextPage } from "next";
import styles from '@styles/home/Profile.module.css';

/**
 * Layout for Profile block
 * Displays only in mobile view.
 * 
 * 
*/
const Profile: NextPage = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.user_details}>
        <img src="/images/shakir-samoon-profile.jpg" className={styles.profile_image} alt="User profile image" />
        <h3 className={styles.name}>Shakir_Samoon</h3>
        <p className={styles.occupation}>Full Stack Developer</p>
      </div>
      <div className={`${styles.follow} ${styles.followers}`}>
        <p className={styles.count}>10</p>
        <p className={styles.text}>Followers</p>
      </div>
      <div className={`${styles.follow} ${styles.following}`}>
        <p className={styles.count}>11</p>
        <p className={styles.text}>Following</p>
      </div>
      <div className={styles.edit_profile}>
        <a>Edit Profile</a>
      </div>
    </div>
  );
}

export default Profile;