import React, { FC, ReactElement } from 'react';
import styles from './ProjectDetail.module.scss';

export interface ProjectDetailProps {
    title: string
    description: ReactElement[]
    playLink: string
    destination: string
}

const ProjectDetail: FC<ProjectDetailProps> = (props) => (
    <div className={styles.ProjectDetail}>
        <div className={styles.Title}>{props.title}</div>

        <div className={styles.DetailContainer}>
            <div className={styles.Description}>{props.description}</div>
            <a target={'_blank'} href={props.playLink} rel="noreferrer">You can play it here on {props.destination}.</a>
        </div>
    </div>
);

export default ProjectDetail;
