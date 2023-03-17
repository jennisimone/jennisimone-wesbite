import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
        </>
    );
}

export default App;
