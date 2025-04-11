import { Link } from 'react-router-dom'

function Project(props) {
    return (
        <div className="relative group container shadow-lg shadow-[#040c16] bg-cover rounded-md flex justify-center items-center mx-auto overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                style={{ backgroundImage: `url(${props.imgUrl})` }}
            ></div>

            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>

            <div className="relative opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-center transition-opacity duration-300 gap-4 p-4">
                <span className="text-lg font-bold tracking-wider">
                    {props.projectTitle}
                </span>
                <p>{props.projectDescription}</p>
                {props.link && (
                    <Link to={props.link}>
                        <button className="rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                            See More
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Project;