import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@styles/common/LeftPanel.module.css';

/**
 * Layout for the Left side of the app
 * Everything in the left side of the app structured here.
 * Displays user profile details.
 * 
*/
const LeftPanel: NextPage = () => {
  const router = useRouter();
  const active_home = router.pathname === '/' ? styles.active : '';
  const active_favorites = router.pathname === '/favorites' ? styles.active : '';

  return (
    <div className={styles.left_panel}>
      <div className={styles.box}>
        <div className={styles.app_bar}>
          <img src="/images/app-logo.png" className={styles.app_logo} alt="Application logo" />
          <p className={styles.app_name}>Deadpool SM</p>
        </div>
        <div className={styles.profile}>
          <img src='/images/shakir-samoon-profile.jpg' className={styles.profile_image} alt="Profile image" />
          <p className={styles.username}>@ShakirSamoon</p>
          <p className={styles.occupation}>Senior Software Engineer</p>
          <div className={styles.follow}>
            <div className={styles.followers}>
              <p className={styles.count}>11</p>
              <p className={styles.text}>Followers</p>
            </div>
            <div className={styles.following}>
              <p className={styles.count}>10</p>
              <p className={styles.text}>Following</p>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <Link href="/" className={`${styles.nav_button} ${active_home}`} passHref>
            <i className="fa fa-home"></i>
            <p>Home</p>
          </Link>
          <Link href="/favorites" className={`${styles.nav_button} ${active_favorites}`} passHref>
            <i className="fa fa-heart"></i>
            <p>Favorites</p>
          </Link>
        </div>
        <div className={styles.bottom}>
          <a className={styles.logout_button}>
            <i className="fa fa-sign-out-alt"></i>
            <p>Logout</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;