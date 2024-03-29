import React, { FC, ReactElement } from 'react';
import styles from './ProjectSummary.module.scss';

export interface ProjectSummaryProps {
    path: string,
    name: string,
    imageName: string,
    imageAlt: string,
    projectSummary: ReactElement[]
}

const ProjectSummary: FC<ProjectSummaryProps> = (props) => (
    <div className={styles.ProjectSummary}>
        <div className={styles.Title}>{props.name}</div>
        <div className={styles.Body}>
            <img className={styles.Image} src={`images/projects/project-summary/${props.imageName}`}
                 alt={props.imageAlt}/>
            <div className={styles.Summary}>{props.projectSummary}</div>
            <div className={styles.LearnMore}>
                <a href={`/projects/${props.path}`}>Learn more</a>
            </div>
        </div>
    </div>
);

export default ProjectSummary;
