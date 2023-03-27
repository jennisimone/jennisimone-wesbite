import React, { FC } from 'react';
import styles from './Blog.module.scss';
import BlogPost from "../BlogPost/BlogPost";
import { firstPostData } from "./posts/first-post";

interface ContactProps {}

const Blog: FC<ContactProps> = () => (
  <div className={styles.Content}>
      <div className={styles.Sidebar}>
          <div>Previous Posts</div>
          <div className={styles.PostLinkContainer}>
              <button className={styles.PostLinks} onClick={() => scrollToBlog(firstPostData.id)}>{firstPostData.title}</button>
          </div>
      </div>
      <div className={styles.Posts}>
          <BlogPost {...firstPostData}/>
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
