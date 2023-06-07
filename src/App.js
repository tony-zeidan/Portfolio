import Home from "./components/Home";

import {BrowserRouter, Route, Switch, Routes,} from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage";
import GamesPage from "./components/Games/GamesPage";
import ProjectsPage from "./components/ProjectPages/ProjectsPage";
import EducationPage from "./components/EducationPages/EducationPage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path='/games' element={<GamesPage/>}/>
                    <Route path='/projects' element={<ProjectsPage/>}/>
                    <Route path='/education' element={<EducationPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;