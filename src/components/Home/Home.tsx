import React, { FC } from 'react';
import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home}>
      <div className={styles.Title}>jennisimone</div>
  </div>
);

export default Home;
