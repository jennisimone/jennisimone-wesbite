import React, { FC } from 'react';
import styles from './Footer.module.scss';

interface FooterProps {
}

const Footer: FC<FooterProps> = () => (
        <footer className={styles.Footer}>
            <div className={styles.Inner}>
                <div className={styles.Copyright}>© jennisimone | 2023</div>
                <div className={styles.Links}>
                    <div className={styles.LinkSection}>
                        <a target={'_blank'} href='https://github.com/jennisimone' rel="noreferrer"> <img
                            src={'/images/icons/github.svg'} alt={'github logo'}/>Github</a>
                        <a target={'_blank'} href='https://www.linkedin.com/in/fosterjenni/' rel="noreferrer"><img
                            src={'/images/icons/linkedin.png'} alt={'linkedin logo'}/>LinkedIn</a>
                    </div>
                    <div className={styles.LinkSection}>
                        <a target={'_blank'} href='https://jennisimone.itch.io' rel="noreferrer">
                            <img
                                src={'/images/icons/itch-logo.png'} alt={'itch logo'}/>Itch.io</a>
                        <a target={'_blank'} href='https://play.google.com/store/apps/developer?id=jennisimone&gl=GB'
                           rel="noreferrer"><img
                            src={'/images/icons/play-logo.png'} alt={'google play logo'}/>Google Play</a>
                    </div>
                </div>
            </div>
        </footer>
    )
;

export default Footer;
