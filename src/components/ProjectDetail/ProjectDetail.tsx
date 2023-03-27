import React, { FC, ReactElement } from 'react';
import styles from './ProjectDetail.module.scss';

export interface ProjectDetailProps {
    title: string
    gameEmbed: ReactElement
    description: ReactElement[]
}

const ProjectDetail: FC<ProjectDetailProps> = (props) => (
    <div className={styles.ProjectDetail}>
        <div className={styles.Title}>{props.title}</div>

        <div className={styles.DetailContainer}>
            <div>{props.gameEmbed}</div>
            <div className={styles.Description}>{props.description}</div>
        </div>
    </div>
);

export default ProjectDetail;
