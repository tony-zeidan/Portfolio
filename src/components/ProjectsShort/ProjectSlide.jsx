import {Link} from "react-router-dom";
import React from "react";

function ProjectSlide(props) {
    return (
        <div className="flex flex-col h-full items-center w-full h-full justify-center bg-center bg-cover bg-no-repeat hover:bg-contain "
             style={{ backgroundImage: `url(${props.imgUrl})` }}>
            <Link to={props.link}>
                <div className='bg-[#0a192f] border border-white rounded px-2 py-2'>
                    <h1 className='text-lg test-bold'>{props.title}</h1>
                </div>
                <div>
                    <p className='text-1xl'>{props.desc}</p>
                </div>
            </Link>
        </div>
    );
}

export default ProjectSlide;