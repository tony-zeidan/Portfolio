import { Link } from 'react-router-dom'

function Project (props) {
    return (
        <div
        style={{ backgroundImage: `url(${props.imgUrl})` }}
        className='shadow-lg shadow-[#040c16] group container bg-contain rounded-md flex justify-center items-center mx-auto content-div'
        >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
            <span className=' text-lg font-bold text-white tracking-wider'>
            {props.projectTitle}
            </span>
            <p className='text-center'>{props.projectDescription}</p>
            <div className='pt-8 text-center'>
            {props.link ? (
                <Link to={props.link}>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    See More
                </button>
                </Link>
            ) : (
                <></>
            )}

            </div>
        </div>
        </div>
    );
}

export default Project;