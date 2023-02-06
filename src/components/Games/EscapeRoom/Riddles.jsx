import React, { useState } from 'react';
import Riddle1 from './Riddle1'

function Riddles() {

    const [doneRiddles, setDoneRiddles] = useState([]);
    const MAX_RIDDLES = 1;

    const selectRiddle = () => {
        let x = Math.floor(Math.random()*1 + 1);
        while (x in doneRiddles) {
            x = Math.floor(Math.random()*1 + 1);
        }
        return x;
    }

    const [currRiddle, setCurrRiddle] = useState(selectRiddle());

    const onSolved = () => {
        setDoneRiddles([...doneRiddles,currRiddle]);
        if (doneRiddles.length = MAX_RIDDLES) {
            alert("You have solved all of my riddles!");
        } else {
            setCurrRiddle(selectRiddle());
        }
    }

    const getRiddleElem = () => {
        console.log(currRiddle);

        let cmp = "Riddle"+currRiddle;

        if (currRiddle == 1) {
            return (<Riddle1 onSolved={onSolved}/>)
        }
    }

    return (
        <div className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full rounded overflow-hidden shadow-lg">
            {getRiddleElem()}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Riddle #{currRiddle}</div>
                <form onSubmit={()=>{console.log("SUBMIT")}}>
                    <legend>Your Answer</legend>
                    <input type='text'/>
                <span type='submit' className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Submit</span>
                <span type='reset' className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Reset</span>
                </form>

            </div>
        </div>
    );
}
export default Riddles;