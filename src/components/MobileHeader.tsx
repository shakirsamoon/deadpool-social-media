import { NextPage } from "next";
import styles from '@styles/common/MobileHeader.module.css';

/**
 * Header layout for the mobile view
 * 
*/
const MobileHeader: NextPage = () => {
    return (
        <div className={styles.mobile_header}>
            <div className={styles.app_title}>
                <img src="/images/app-logo.png" className={styles.app_logo} alt="Application logo" />
                <h2 className={styles.app_name}>Deadpool SM</h2>
            </div>
            <a className={styles.logout}>
                <i className="fa fa-sign-out-alt"></i>
            </a>
        </div>
    );
}

export default MobileHeader;