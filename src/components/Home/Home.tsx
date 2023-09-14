import React, { FC } from 'react';
import styles from './Home.module.scss';

interface HomeProps {
}

const Home: FC<HomeProps> = () => (
        <div className={styles.Home}>
            <div className={styles.Panel}>
                <div className={styles.HomeLogo}>JENNISIMONE</div>
                <div className={styles.Skills}>
                    <div className={styles.SkillsContainer}>
                        <img className={styles.SkillsImage} alt={'Itch.io game page'} src={'images/Games.png'}></img>
                        <div className={styles.SkillsName}>Games</div>
                    </div>
                    <div className={styles.SkillsContainer}>
                        <img className={styles.SkillsImage} alt={'Some code'} src={'images/Programming.png'}></img>
                        <div className={styles.SkillsName}>Programming</div>
                    </div>
                    <div className={styles.SkillsContainer}>
                        <img className={styles.SkillsImage} alt={'Some blog notes'} src={'images/Blogging.png'}></img>
                        <div className={styles.SkillsName}>Blogging</div>
                    </div>
                </div>
                <div className={styles.Title}>
                    <div className={styles.Technologies}>
                        <div className={styles.TechnologiesSection}>
                            <div className={styles.TechUsed}>Technologies</div>
                            <div className={styles.TechIcons}>
                                <img className={styles.TechImage} alt='Android Studio' title='Android Studio'
                                     src={'images/icons/technologies/Android_Studio_Icon.png'}/>
                                <img className={styles.TechImage} alt='Unity' title='Unity'
                                     src={'images/icons/technologies/Unity_Icon.png'}/>
                                <img className={styles.TechImage} alt='Phaser' title='Phaser'
                                     src={'images/icons/technologies/Phaser_Icon.png'}/>
                                <img className={styles.TechImage} alt='Game Maker Studio' title='Game Maker Studio'
                                     src={'images/icons/technologies/GameMaker_Icon.png'}/>
                            </div>
                        </div>
                        <div className={styles.TechnologiesSection}>
                            <div className={styles.TechUsed}>Languages</div>
                            <div className={styles.TechIcons}>
                                <img className={styles.TechImage} alt='C#' title='C#'
                                     src={'images/icons/technologies/CSharp_Icon.png'}/>
                                <img className={styles.TechImage} alt='Kotlin' title='Kotlin'
                                     src={'images/icons/technologies/Kotlin_Icon.png'}/>
                                <img className={styles.TechImage} alt='JavaScript' title='JavaScript'
                                     src={'images/icons/technologies/Javascript_Icon.png'}/>
                                <img className={styles.TechImage} alt='Java' title='Java'
                                     src={'images/icons/technologies/Java_Icon.png'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
;

export default Home;
