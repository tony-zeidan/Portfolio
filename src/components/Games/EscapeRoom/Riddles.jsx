import React, { useState } from 'react';
import Riddle1 from './Riddle1'
import Riddle2 from "./Riddle2";
import GameButton from "../GameButton";

const RIDDLES = [
    {
        id: 1,
        answer: 'ZIA',
        prompt: 'Someone changed your password while you were out. They left the algorithm behind. Work out what it prints.',
        body: <Riddle1 />,
    },
    {
        id: 2,
        answer: '57',
        prompt: 'The second lock wants a number. Trace the loop and give the value it prints.',
        body: <Riddle2 />,
    },
];

const MAX_ATTEMPTS = 4;

const pickNext = (solved) => {
    const remaining = [];
    for (let i = 0; i < solved.length; i++) {
        if (!solved[i]) remaining.push(i);
    }
    if (remaining.length === 0) return -1;
    return remaining[Math.floor(Math.random() * remaining.length)];
};

function Riddles({ onEnd = () => {} }) {

    const [solved, setSolved] = useState(() => RIDDLES.map(() => false));
    const [current, setCurrent] = useState(() => Math.floor(Math.random() * RIDDLES.length));
    const [guessInput, setGuessInput] = useState("");
    const [attempt, setAttempt] = useState(0);
    const [message, setMessage] = useState("");
    const [finished, setFinished] = useState(null);

    const reset = () => {
        setSolved(RIDDLES.map(() => false));
        setCurrent(Math.floor(Math.random() * RIDDLES.length));
        setGuessInput("");
        setAttempt(0);
        setMessage("");
        setFinished(null);
    };

    const submitGuess = (e) => {
        e.preventDefault();
        if (finished) return;

        const riddle = RIDDLES[current];
        const correct =
            guessInput.trim().toUpperCase() === riddle.answer.toUpperCase();

        if (correct) {
            const nextSolved = solved.map((s, i) => (i === current ? true : s));
            setSolved(nextSolved);
            setGuessInput("");
            setAttempt(0);

            const next = pickNext(nextSolved);
            if (next === -1) {
                setFinished('win');
                setMessage("You solved every riddle.");
            } else {
                setCurrent(next);
                setMessage("Correct. Here is the next one.");
            }
            return;
        }

        const nextAttempt = attempt + 1;
        setAttempt(nextAttempt);
        setGuessInput("");
        if (nextAttempt >= MAX_ATTEMPTS) {
            setFinished('lose');
            setMessage("You used all of your attempts.");
        } else {
            setMessage(`Not it. ${MAX_ATTEMPTS - nextAttempt} attempts left.`);
        }
    };

    const endGame = () => {
        reset();
        onEnd();
    };

    const riddle = RIDDLES[current];

    return (
        <div className="max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full rounded overflow-hidden shadow-lg">
            {!finished && riddle.body}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Riddle #{riddle.id}</div>
                <div className="mb-2 text-sm text-gray-400">
                    Solved {solved.filter(Boolean).length} of {RIDDLES.length}
                    <span className="mx-2">·</span>
                    Attempt {attempt} of {MAX_ATTEMPTS}
                </div>
                {!finished && (
                    <div className="mb-5">
                        <p>{riddle.prompt}</p>
                    </div>
                )}
                {message && (
                    <p className={`mb-3 ${finished === 'lose' ? 'text-red-400' : 'text-cyan-400'}`} role="status">
                        {message}
                    </p>
                )}

                {!finished && (
                    <form onSubmit={submitGuess}>
                        <label htmlFor="riddle-guess" className="block mb-2 text-sm text-gray-400">
                            Your answer
                        </label>
                        <input
                            id="riddle-guess"
                            type='text'
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            value={guessInput}
                            onChange={(e) => setGuessInput(e.target.value)}
                        />
                        <GameButton type="submit">Submit</GameButton>
                    </form>
                )}

                <div className={finished ? '' : 'mt-2'}>
                    <GameButton onClick={reset}>{finished ? 'Play again' : 'Reset'}</GameButton>
                    <GameButton onClick={endGame}>Exit game</GameButton>
                </div>
            </div>
        </div>
    );
}
export default Riddles;
