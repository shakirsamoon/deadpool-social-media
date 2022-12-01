import { FunctionComponent, PropsWithChildren } from "react";
import LeftPanel from "@components/LeftPanel";
import Meta from "@components/Meta";
import MobileHeader from '@components/MobileHeader';
import BottomBar from "@components/BottomBar";
import styles from '@styles/common/Layout.module.css';

interface ILayoutProps extends PropsWithChildren { }

/**
 * This is the main layout for the `App`
 *
 * 
 * @param {children} App right side layout.
*/
const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <MobileHeader />
      <div className={styles.wrapper}>
        <LeftPanel />
        {children}
      </div>
      <BottomBar />
    </>
  );
}
export default Layout;