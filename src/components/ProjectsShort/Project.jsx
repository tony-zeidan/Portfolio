import { Link } from 'react-router-dom'
import useSpotlight from '../../hooks/useSpotlight'

function Project(props) {
    const onMouseMove = useSpotlight();

    return (
        <Link
            to={props.link}
            onMouseMove={onMouseMove}
            className="spotlight group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/[0.07] shadow-lg shadow-[#040c16] hover:border-cyan-500/40 hover:-translate-y-0.5 transition-[transform,border-color] duration-200 ease-out"
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                style={{ backgroundImage: `url(${props.imgUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/25 transition-opacity duration-300 group-hover:opacity-100 opacity-90" />

            <div className="relative flex h-full flex-col justify-end p-4">
                <p className="text-sm text-gray-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-[opacity,transform] duration-300 ease-out">
                    {props.projectDescription}
                </p>
                <span className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-lg font-bold tracking-wide text-white">
                        {props.projectTitle}
                    </span>
                    <span className="font-mono text-xs text-cyan-400 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
                        See more
                    </span>
                </span>
            </div>
        </Link>
    );
}

export default Project;
