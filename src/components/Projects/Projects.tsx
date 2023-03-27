import React, { FC } from 'react';
import styles from './Projects.module.scss';
import ProjectSummary from "../ProjectSummary/ProjectSummary";
import { whatShouldIPlayProps } from "./projects-data/what-should-i-play";
import { antHillMassacreProps } from "./projects-data/ant-hill-massacre";
import { afraidOfTheDarkProps } from "./projects-data/afraid-of-the-dark";
import { robotJumpProps } from "./projects-data/robot-jump";
import { operationPresentDropProps } from "./projects-data/operation-present-drop";
import { moondustProps } from "./projects-data/moondust";

interface ProjectsProps {
}

const Projects: FC<ProjectsProps> = () => (
    <div className={styles.Projects}>
        <ProjectSummary {...robotJumpProps}/>
        <ProjectSummary {...moondustProps}/>
        <ProjectSummary {...afraidOfTheDarkProps}/>
        <ProjectSummary {...antHillMassacreProps}/>
        <ProjectSummary {...whatShouldIPlayProps}/>
        <ProjectSummary {...operationPresentDropProps}/>
    </div>
);

export default Projects;
