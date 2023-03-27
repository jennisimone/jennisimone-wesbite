import React, { FC, ReactElement } from 'react';
import styles from './BlogPost.module.scss';

export interface BlogPostProps {
    id: string,
    title: string,
    date: string,
    post: ReactElement[]
}

const BlogPost: FC<BlogPostProps> = (props) => (
    <div id={props.id} className={styles.BlogPost}>
        <div className={styles.Title}>{props.title}</div>
        <div className={styles.Date}>{props.date}</div>
        <div className={styles.Post}>{props.post}</div>
    </div>
);

export default BlogPost;
