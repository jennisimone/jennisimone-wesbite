import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import {antHillMassacreProps} from "./components/Projects/projects-data/ant-hill-massacre";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import {afraidOfTheDarkProps} from "./components/Projects/projects-data/afraid-of-the-dark";
import {robotJumpProps} from "./components/Projects/projects-data/robot-jump";
import {whatShouldIPlayProps} from "./components/Projects/projects-data/what-should-i-play";
import {operationPresentDropProps} from "./components/Projects/projects-data/operation-present-drop";
import {robotJumpDetailProps} from "./components/ProjectDetail/data/robot-jump-detail";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="projects" element={<Projects/>}/>
                <Route path={`projects/${antHillMassacreProps.path}`} element={<ProjectDetail {...robotJumpDetailProps}/>}/>
                <Route path={`projects/${afraidOfTheDarkProps.path}`} element={<ProjectDetail {...robotJumpDetailProps}/>}/>
                <Route path={`projects/${robotJumpProps.path}`} element={<ProjectDetail {...robotJumpDetailProps}/>}/>
                <Route path={`projects/${whatShouldIPlayProps.path}`} element={<ProjectDetail {...robotJumpDetailProps}/>}/>
                <Route path={`projects/${operationPresentDropProps.path}`} element={<ProjectDetail {...robotJumpDetailProps}/>}/>
                <Route path="blog" element={<Blog/>}/>
            </Routes>
        </>
    );
}

export default App;
