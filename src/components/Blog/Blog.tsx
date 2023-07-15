import React, { FC } from 'react';
import styles from './Blog.module.scss';
import BlogPost from "../BlogPost/BlogPost";
import { portfolioSitePostData } from "./posts/portfolio-site";
import { hackJamPostData } from "./posts/hacks-and-jams";
import { makingModsPostData } from "./posts/making-mods";

interface ContactProps {}

const Blog: FC<ContactProps> = () => (
  <div className={styles.Content}>
      <div className={styles.Sidebar}>
          <div>Posts</div>
          <div className={styles.PostLinkContainer}>
              <button className={styles.PostLinks} onClick={() => scrollToBlog(makingModsPostData.id)}>{makingModsPostData.title}</button>
              <button className={styles.PostLinks} onClick={() => scrollToBlog(hackJamPostData.id)}>{hackJamPostData.title}</button>
              <button className={styles.PostLinks} onClick={() => scrollToBlog(portfolioSitePostData.id)}>{portfolioSitePostData.title}</button>
          </div>
      </div>
      <div className={styles.Posts}>
          <BlogPost {...makingModsPostData}/>
          <BlogPost {...hackJamPostData}/>
          <BlogPost {...portfolioSitePostData}/>
      </div>
  </div>
);

function scrollToBlog(id: string) {
    const element = document.getElementById(id);
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({behavior: 'smooth'});
    }
}

export default Blog;
