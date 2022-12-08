import { NextPage } from "next";
import Meta from "@components/Meta";
import Link from 'next/link';
import styles from '@styles/notfound/NotFound.module.css';

/**
 *  Layout for the 404 Not Found page
 * 
*/
const NotFound: NextPage = () => {
  return (
    <>
      <Meta title="404 Not Found - Deadpool Social Media" />
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>404 Not Found</h1>
          <p className={styles.message}>Sorry, the page that you are looking for does not exist.</p>
          <Link href='/' className={styles.go_home}>
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;