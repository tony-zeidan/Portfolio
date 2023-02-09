import About from "./About";
import Contact from "./Contact";
import AuthorBlurb from "./AuthorBlurb";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./ProjectsShort/Projects";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import ProjectSlides from "./ProjectsShort/ProjectSlides";

function Home() {

    const location = useLocation()
    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
            window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
    }, [location,])

    return (
    <div>
        <div>
            <AuthorBlurb />
            <About />
            <Skills />
            <ProjectSlides />
            <Contact />
        </div>
    </div>
  );
}
export default Home;