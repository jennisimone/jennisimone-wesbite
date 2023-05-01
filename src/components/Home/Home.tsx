import React, { FC } from 'react';
import styles from './Home.module.scss';

interface HomeProps {
}

const Home: FC<HomeProps> = () => (
    <div className={styles.Home}>
        <div className={styles.Panel}>
            <img className={styles.MobileImage} alt='game screenshots' src={'images/mobile-banner.png'}/>
            <img className={styles.DesktopImage} alt='game screenshots' src={'images/banner.png'}/>
            <div className={styles.Title}>
                <div>
                    Free games and apps for everyone to enjoy.
                </div>
                <div className={styles.Technologies}>
                    <div className={styles.TechUsed}>Technologies</div>
                    <div className={styles.TechIcons}>
                        <img className={styles.TechImage} alt='Android Studio' src={'images/icons/technologies/Android_Studio_Icon.png'}/>
                        <img className={styles.TechImage} alt='Unity' src={'images/icons/technologies/Unity_Icon.png'}/>
                        <img className={styles.TechImage} alt='Phaser' src={'images/icons/technologies/Phaser_Icon.png'}/>
                    </div>
                    <div className={styles.TechUsed}>Languages</div>
                    <div className={styles.TechIcons}>
                        <img className={styles.TechImage} alt='C#' src={'images/icons/technologies/CSharp_Icon.png'}/>
                        <img className={styles.TechImage} alt='Kotlin' src={'images/icons/technologies/Kotlin_Icon.png'}/>
                        <img className={styles.TechImage} alt='JavaScript' src={'images/icons/technologies/Javascript_Icon.png'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;
