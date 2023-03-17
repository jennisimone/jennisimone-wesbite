import React, {FC, ReactElement} from 'react';
import styles from './ProjectDetail.module.scss';

export interface ProjectDetailProps {
    gameEmbed: ReactElement
}

const ProjectDetail: FC<ProjectDetailProps> = (props) => (
  <div className={styles.ProjectDetail}>
      {props.gameEmbed}
  </div>
);

export default ProjectDetail;
