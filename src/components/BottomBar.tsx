import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from 'next/link';
import styles from '@styles/common/BottomBar.module.css';

/**
 * Layout for the Bottom Nav bar.
 * It enables navigate through `home` and `favorites` pages.
 * Displays on in mobile view.
 * 
*/
const BottomBar: NextPage = () => {
  const router = useRouter();
  const active_home = router.pathname === '/' ? styles.active : '';
  const active_favorites = router.pathname === '/favorites' ? styles.active : '';

  return (
    <div className={styles.bottom_bar}>
      <Link href="/" className={active_home} passHref>
        <i className='fa fa-home'></i>
        <p>Home</p>
      </Link>
      <Link href="/favorites" className={active_favorites} passHref>
        <i className='fa fa-heart'></i>
        <p>Liked</p>
      </Link>
    </div>
  );
}

export default BottomBar;