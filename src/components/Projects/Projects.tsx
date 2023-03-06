import React, { FC } from 'react';
import styles from './Projects.module.scss';
import ProjectSummary from "../ProjectSummary/ProjectSummary";
import {whatShouldIPlayProps} from "./projects-data/what-should-i-play";
import {antHillMassacreProps} from "./projects-data/ant-hill-massacre";
import {afraidOfTheDarkProps} from "./projects-data/afraid-of-the-dark";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => (
  <div className={styles.Projects}>
    <ProjectSummary {...whatShouldIPlayProps}/>
    <ProjectSummary {...antHillMassacreProps}/>
    <ProjectSummary {...afraidOfTheDarkProps}/>
  </div>
);

export default Projects;
