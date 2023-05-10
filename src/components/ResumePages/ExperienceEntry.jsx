import React from "react";
import {FaGithub} from "react-icons/fa";

const ExperienceEntry = ({ prefixStr = "PROJECT", num, dateStr, titleStr, orgStr, projStr, linkStr, infoLst }) => {

    const makeBullets = (bullets) => {
        return bullets.map(bullet => {
            if (Array.isArray(bullet)) {
                if (bullet.length > 0) {
                    return (
                        <li>{bullet[0]}
                            <ul className="list-disc list-inside">
                                {
                                    bullet.slice(1).map(inner => {
                                        return (<li>{inner}</li>);
                                    })
                                }
                            </ul>
                        </li>
                    )
                } else {
                    return (<li>{bullet[0]}</li>);
                }
            }

            return (<li>{bullet}</li>);
        })
    }

    return (
        <div className="w-full mt-3">
            <div>
                <div>
                    <p className="font-bold">{prefixStr} #{num}</p>
                    <p className="font-bold">{dateStr}</p>
                    <p className="font-bold">{titleStr}</p>
                    <p className="italic">{orgStr}</p>
                    {
                        projStr ? (<p className="italic">{projStr}</p>): (<></>)
                    }
                    {
                        linkStr ? (
                            <div className = "float-right">
                                <a href={linkStr}>
                                    <FaGithub size={30}></FaGithub>
                                </a>
                            </div>
                        ): (<></>)
                    }

                </div>
            </div>

            <ul className="list-disc list-inside">
                {
                    infoLst ? (makeBullets(infoLst)): <></>
                }
            </ul>
        </div>
    )

}

export default ExperienceEntry;