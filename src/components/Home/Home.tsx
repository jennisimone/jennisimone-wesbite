import React, {FC} from 'react';
import styles from './Home.module.scss';

interface HomeProps {
}

const Home: FC<HomeProps> = () => (
    <div className={styles.Home}>
        <img alt='projects banner' src={'images/banner.png'}/>
        <div className={styles.Title}> Games and applications made by jennisimone</div>
    </div>
);

export default Home;
