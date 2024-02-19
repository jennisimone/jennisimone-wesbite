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
import {moondustProps} from "./components/Projects/projects-data/moondust";
import Footer from './components/Footer/Footer';
import { afraidOfTheDarkDetailProps } from "./components/ProjectDetail/data/afraid-of-the-dark-detail";
import { moondustDetailProps } from "./components/ProjectDetail/data/moondust-detail";
import { antHillMassacreDetailProps } from "./components/ProjectDetail/data/ant-hill-massacre-detail";
import { whatShouldIPlayDetailProps } from "./components/ProjectDetail/data/what-should-i-play-detail";
import { operationPresentDropDetailProps } from "./components/ProjectDetail/data/operation-present-drop";
import { covoiderProps } from "./components/Projects/projects-data/covoider";
import { covoiderDetailProps } from "./components/ProjectDetail/data/covoider-detail";
import { maskUpStaySharpProps } from "./components/Projects/projects-data/mask-up-stay-sharp";
import { maskUpStaySharpDetailProps } from "./components/ProjectDetail/data/mask-up-stay-sharp-detail";
import { vehicleMovesProps } from "./components/Projects/projects-data/vehicle-moves";
import { vehicleMovesDetailProps } from "./components/ProjectDetail/data/vehicle-moves-detail";
import { expandedWitchProps } from "./components/Projects/projects-data/expanded-witch";
import { expandedWitchDetailProps } from "./components/ProjectDetail/data/expanded-witch-detail";
import { fastFoodDashDetailProps } from "./components/ProjectDetail/data/fast-food-dash-detail";
import { fastFoodDashProps } from "./components/Projects/projects-data/fast-food-dash";
import { brickBreakerProps } from "./components/Projects/projects-data/brick-breaker";
import { brickBreakerDetailProps } from "./components/ProjectDetail/data/brick-breaker-detail";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="projects" element={<Projects/>}/>
                <Route path={`projects/${antHillMassacreProps.path}`} element={<ProjectDetail {...antHillMassacreDetailProps}/>}/>
                <Route path={`projects/${afraidOfTheDarkProps.path}`} element={<ProjectDetail {...afraidOfTheDarkDetailProps}/>}/>
                <Route path={`projects/${robotJumpProps.path}`} element={<ProjectDetail {...robotJumpDetailProps}/>}/>
                <Route path={`projects/${whatShouldIPlayProps.path}`} element={<ProjectDetail {...whatShouldIPlayDetailProps}/>}/>
                <Route path={`projects/${operationPresentDropProps.path}`} element={<ProjectDetail {...operationPresentDropDetailProps}/>}/>
                <Route path={`projects/${moondustProps.path}`} element={<ProjectDetail {...moondustDetailProps}/>}/>
                <Route path={`projects/${covoiderProps.path}`} element={<ProjectDetail {...covoiderDetailProps}/>}/>
                <Route path={`projects/${maskUpStaySharpProps.path}`} element={<ProjectDetail {...maskUpStaySharpDetailProps}/>}/>
                <Route path={`projects/${vehicleMovesProps.path}`} element={<ProjectDetail {...vehicleMovesDetailProps}/>}/>
                <Route path={`projects/${expandedWitchProps.path}`} element={<ProjectDetail {...expandedWitchDetailProps}/>}/>
                <Route path={`projects/${fastFoodDashProps.path}`} element={<ProjectDetail {...fastFoodDashDetailProps}/>}/>
                <Route path={`projects/${brickBreakerProps.path}`} element={<ProjectDetail {...brickBreakerDetailProps}/>}/>
                <Route path="blog" element={<Blog/>}/>
            </Routes>
            <div className={'EmptySpace'}/>
            <Footer/>
        </>
    );
}

export default App;
