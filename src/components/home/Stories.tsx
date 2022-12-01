import { NextPage } from "next";
import AdsBlock from "@components/home/AdsBlock";
import styles from '@styles/home/Stories.module.css';
import IStoryProps from "@data/StoryProps";

/**
 * Layout for the Stories block
 * 
 * 
 * @param {stories} IStoryProps[] List of Story data
*/
const Stories: NextPage<{ stories: IStoryProps[] }> = ({ stories }) => {
  return (
    <div className={styles.stories_block}>
      <div className={styles.stories}>
        <p className={styles.title}>Stories</p>
        <div className={styles.story_list}>
          {
            stories.map((story) => (
              <div key={story.id} className={styles.story_item}>
                <img src={story.profile_image_url} className={styles.profile_image} alt="Story profile image" />
                <p className={styles.username}>{story.username}</p>
              </div>
            ))
          }
        </div>
      </div>
      <AdsBlock customClass='story' />
    </div>
  );
}

export default Stories;