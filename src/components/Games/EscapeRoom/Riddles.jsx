import React, { useState } from 'react';
import Riddle1 from './Riddle1'

function Riddles() {

    const [doneRiddles, setDoneRiddles] = useState([]);

    const selectRiddle = () => {
        let x = Math.floor(Math.random()*1 + 1);
        while (x in doneRiddles) {
            x = Math.floor(Math.random()*1 + 1);
        }
        return x;
    }

    const [currRiddle, setCurrRiddle] = useState(selectRiddle());

    const getRiddleElem = () => {
        console.log(currRiddle);

        let cmp = "Riddle"+currRiddle;
        if (currRiddle == 1) {
            return (<Riddle1 />)
        }
    }

    return (
        <div className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full rounded overflow-hidden shadow-lg">
            {getRiddleElem()}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Riddle #{currRiddle}</div>
            </div>
        </div>
    );
}
export default Riddles;