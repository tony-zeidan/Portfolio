import About from "./About";
import Contact from "./Contact";
import AuthorBlurb from "./AuthorBlurb";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./ProjectsShort/Projects";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {prefersReducedMotion} from "../hooks/useReveal";

function Home() {

    const location = useLocation()
    useEffect(()=> {
        const behavior = prefersReducedMotion() ? "auto" : "smooth"
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior})
            }
        } else {
            window.scrollTo({top:0,left:0, behavior})
        }
    }, [location,])

    return (
    <div>
        <div>
            <AuthorBlurb />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
        </div>
    </div>
  );
}
export default Home;
