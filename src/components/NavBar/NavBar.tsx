import React, { FC, useState } from 'react';
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

    return isMobile ? (
            <nav className={styles.MobileNavBar}>
                <div className={styles.Name}>jennisimone</div>
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
                <div className={styles.Name}>jennisimone</div>
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
