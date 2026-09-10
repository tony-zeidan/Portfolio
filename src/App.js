import {BrowserRouter, Route, Routes,} from "react-router-dom";
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
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:border focus:border-cyan-500 focus:bg-[#202020] focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-gray-100"
                >
                    Skip to content
                </a>
                <Navbar/>
                <main id="main">
                    <Routes>
                        <Route index element={<HomePage/>}/>
                        <Route path='/games' element={<GamesPage/>}/>
                        <Route path='/projects' element={<ProjectsPage/>}/>
                        <Route path='/education' element={<EducationPage/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
