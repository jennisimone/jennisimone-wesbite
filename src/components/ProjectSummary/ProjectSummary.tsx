import React, {FC, ReactElement} from 'react';
import styles from './ProjectSummary.module.scss';

export interface ProjectSummaryProps {
    path: string,
    name: string,
    imageName: string,
    imageAlt: string,
    projectSummary: ReactElement[]
    icon: ReactElement
}

const ProjectSummary: FC<ProjectSummaryProps> = (props) => (
    <div className={styles.ProjectSummary}>
        <div className={styles.Title}>{props.name}</div>
        <img className={styles.Image} src={`images/projects/project-summary/${props.imageName}`} alt={props.imageAlt}/>
        <div className={styles.Summary}>{props.projectSummary}</div>
        <a className={styles.LearnMore} href={`/projects/${props.path}`}>Learn more</a>
        <div className={styles.Icon}>{props.icon}</div>
    </div>
);

export default ProjectSummary;
