import { NextPage } from "next";
import styles from '@styles/home/AdsBlock.module.css';

interface IAdsBlockProps {
  customClass?: string
}

/**
 * Layout for Advertisement
 * 
*/
const AdsBlock: NextPage<IAdsBlockProps> = ({ customClass }) => {
  const cClass = customClass ? styles.story : styles.non_story;

  return (
    <div className={`${styles.ads_block} ${cClass}`}>
      <p>CALL US FOR ADVERTISEMENTS<br />Tel: +94 7750 69877</p>
    </div>
  );
}

export default AdsBlock;