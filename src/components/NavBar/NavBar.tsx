import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './NavBar.module.scss'
import { NavLink } from "react-router-dom";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import { down } from "styled-breakpoints";
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

interface NavBarProps {
}

const NavBar: FC<NavBarProps> = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const isMobile = useBreakpoint(down("sm"));

    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const handler = (event: Event) => {
            if (
                navbarOpen &&
                ref.current &&
                !ref.current.contains(event.target as Node)
            ) {
                setNavbarOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handler);
        };
    }, [navbarOpen]);


    return isMobile ? (
            <nav ref={ref} className={styles.MobileNavBar}>
                <a className={styles.Name} href={'/'}>jennisimone</a>
                <div>
                    <button
                        className={styles.Toggle}
                        onClick={() => setNavbarOpen((prev) => !prev)}
                    >
                        {navbarOpen ? (<MdClose style={{width: '32px', height: '32px', color: '#bdafd6'}}/>) : (<FiMenu
                            style={{
                                width: '32px', height: '32px', color: '#bdafd6'
                            }}
                        />)}
                    </button>
                    <ul className={`${styles.BurgerNav}${navbarOpen ? ` ${styles.ShowMenu}` : ''}`}>
                        <li>
                            <NavLink onClick={() => setNavbarOpen(false)} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setNavbarOpen(false)} to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setNavbarOpen(false)} to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setNavbarOpen(false)} to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
        : (
            <nav className={styles.NavBar}>
                <a href={'/'} className={styles.Name}>jennisimone</a>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                </ul>
            </nav>
        );
};

export default NavBar;
