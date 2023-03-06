import React, {FC, ReactElement} from 'react';
import styles from './ProjectSummary.module.scss';

export interface ProjectSummaryProps {
    name: string,
    imageName: string,
    imageAlt: string,
    projectSummary: ReactElement[]
}

const ProjectSummary: FC<ProjectSummaryProps> = (props) => (
    <div className={styles.ProjectSummary}>
        <div className={styles.Title}>{props.name}</div>
        <img className={styles.Image} src={`images/${props.imageName}`} alt={props.imageAlt}/>
        <div className={styles.Summary}>{props.projectSummary}</div>
    </div>
);

export default ProjectSummary;
