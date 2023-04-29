import React, {FC} from 'react';
import styles from './About.module.scss';

interface AboutProps {
}

const About: FC<AboutProps> = () => (
    <div className={styles.Home}>
        <div className={styles.SectionContainer}>
            <div className={styles.Links}>
                <a target={'_blank'} href='https://github.com/jennisimone' rel="noreferrer"> <img
                    src={'/images/icons/github.svg'} alt={'github logo'}/>Github</a>
                <a target={'_blank'} href='https://www.linkedin.com/in/fosterjenni/' rel="noreferrer"><img
                    src={'/images/icons/linkedin.png'} alt={'linkedin logo'}/>LinkedIn</a>
                <a target={'_blank'} href='https://jennisimone.itch.io' rel="noreferrer"><img
                    src={'/images/icons/itch-logo.png'} alt={'itch logo'}/>Itch.io</a>
                <a target={'_blank'} href='https://play.google.com/store/apps/developer?id=jennisimone&gl=GB' rel="noreferrer"><img
                    src={'/images/icons/play-logo.png'} alt={'google play logo'}/>Google Play</a>
            </div>
            <div className={styles.About}>
                <h3>About me</h3>
                <div className={styles.BodyContainer}>
                    <div className={styles.AboutImage}>
                        <img src={'/images/about-image.jpeg'} alt={'author'}/>
                    </div>
                    <div className={styles.Body}>
                        <p>Hello! I'm a software developer based in Manchester, UK. My professional specialty is mainly back end web development in Kotlin, Java and Typescript. </p>
                        <p> Beyond my job, I have a personal interest in Game Development & Android Development. I try to make most of my music and assets in my games & apps although my skills are limited.</p>
                        <p> For art work this is generally done in Aseprite or Procreate. My music is made in Garage Band, using either in built tools or a physical keyboard & bass. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;
