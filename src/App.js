import Home from "./components/Home";

import {BrowserRouter, Route, Routes,} from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage";
import GamesPage from "./components/Games/GamesPage";
import ResumePage from "./components/ResumePages/ResumePage";
import ProjectsPage from "./components/ProjectPages/ProjectsPage";
import EducationPage from "./components/EducationPages/EducationPage";
import WorkExperience from "./components/WorkExperience";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='/resume' element={<ResumePage/>}/>
                <Route path='/games' element={<GamesPage/>}/>
                <Route path='/experience' element={<WorkExperience />}/>
                <Route path='/projects' element={<ProjectsPage/>}/>
                <Route path='/education' element={<EducationPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;