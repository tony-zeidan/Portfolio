import React from "react";

const WorkExperience = ({title, position, icon, start_date, end_date, bullets}) => {


    const getBullets = () => {
        let buffer = [];
        bullets.forEach(
            function (bullet) {
                buffer.push(<li>{bullet}</li>);
            }
        );
        return (
            <ul className='list-disc list-inside'>
                {buffer}
            </ul>
        );
    }

    const getDuration = () => {
        let start = start_date;
        let end = end_date;
        if (start_date instanceof Date) {
            start = start_date.toLocaleDateString('default', { year: "numeric", month: "long"});
        } else if (start_date === "present") {
            start = new Date().toLocaleDateString('default', { year: "numeric", month: "long"});
        }

        if (end_date instanceof Date) {
            end = end_date.toLocaleDateString('default', { year: "numeric", month: "long"});
        } else if (end_date === "present") {
            end = new Date().toLocaleDateString('default', { year: "numeric", month: "long"});
        }

        return (
            <p>{start} to {end}</p>
        );

    }

    return (
        <details open>
            <summary className='text-3xl text-start font-bold border-b-4 text-gray-300 border-cyan-500'>
                {title}
            </summary>
            <p className='text-xl mt-3 mb-1'>
                Position: {position}
            </p>
            <p className='text-xl mt-1 mb-3'>
                Duration: {getDuration()}
            </p>
            {getBullets()}
        </details>
    );
}

export default WorkExperience;