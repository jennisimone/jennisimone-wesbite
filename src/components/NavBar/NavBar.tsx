import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss'

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
    <nav className={styles.NavBar}>
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

export default NavBar;
