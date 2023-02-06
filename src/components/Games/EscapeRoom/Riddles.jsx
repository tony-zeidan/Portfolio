import React, { useState } from 'react';
import Riddle1 from './Riddle1'
import Riddle2 from "./Riddle2";

function Riddles() {

    const [inst, setInst] = useState("");
    const [riddles, setRiddles] = useState([
        false, false,
    ])
    const [guessInput, setGuessInput] = useState("");
    const [guess, setGuess] = useState("");
    const [attempt, setAttempt] = useState(0);
    const MAX_ATTEMPT = 4;

    const doneRiddle = (num) => {
        let arr = riddles;
        arr[num-1] = true;
        setRiddles(arr);
    }

    const allDone = () => {
        return (riddles.every((x) => {return x}));
    }

    const selectRiddle = () => {
        let x = Math.floor(Math.random()*riddles.length + 1);
        while (riddles[x-1] === true) {
            x = Math.floor(Math.random()*2 + 1);
        }
        return x;
    }

    const [currRiddle, setCurrRiddle] = useState(selectRiddle());

    const reset = () => {
        setInst("");
        setRiddles(riddles.fill(false));
        setGuessInput("");
        setGuess("");
        setAttempt(0);
        setCurrRiddle(selectRiddle());
    }

    const onAttempt = (succeed) => {
        if (succeed) {
            doneRiddle(currRiddle);
            if (allDone()) {
                alert("You have solved all of my riddles!");
                reset();
            } else {
                setGuessInput("");
                setGuess("");
                setInst("");
                setAttempt(0);
                let s = selectRiddle();
                console.log("Selected: " + s);
                setCurrRiddle(s);
            }
        }
        setAttempt(attempt+1);
        if (attempt === MAX_ATTEMPT) {
            alert("You have used all of your attempts! Reset.");
            reset();
        }
    }

    const getRiddleElem = () => {
        if (currRiddle === 1) {
            return (<Riddle1 onAttempt={onAttempt} guessTo={guess} info={handleInstChange}/>);
        } else if (currRiddle === 2) {
            return (<Riddle2 onAttempt={onAttempt} guessTo={guess} info={handleInstChange}/>);
        }
    }

    const submitGuess = (e) => {
        e.preventDefault();
        setGuess(guessInput);
    }

    const handleReset = (e) => {
        e.preventDefault();
        reset();
    }

    const handleInstChange = (info) => {
        setInst(info);
    }

    return (
        <div className="max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full rounded overflow-hidden shadow-lg">
            {getRiddleElem()}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Riddle #{currRiddle}</div>
                <div className="mb-2">Attempt: {attempt}</div>
                <div className="mb-5">
                    <p>{inst}</p>
                </div>
                <input type='text' className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" value={guessInput} onChange={(e) => {setGuessInput(e.target.value)}}/>
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={submitGuess}>Submit</button>
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={handleReset}>Reset</button>

            </div>
        </div>
    );
}
export default Riddles;