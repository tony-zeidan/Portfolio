import Home from './Home'
import Navbar from "./Navbar";

function HomePage(props) {

    return (
        <div className="relative">
            <Navbar/>
            <Home />
        </div>
    );
}
export default HomePage;