import React, {useState} from "react";
import GameStartMenu from "./GameStartMenu";

function Game(props) {

    const [started, setStarted] = useState(false);

    const onStart = () => {
        setStarted(true);
    }

    const onGameEnd = () => {
        setStarted(false);
    }

    return (
        <div className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full rounded overflow-hidden shadow-lg">
            {!started ? (
                <GameStartMenu name={props.name} info={props.info} onStart={onStart}/>
            ) : (React.cloneElement(props.element, {onEnd: () => {onGameEnd()}}))}
        </div>

    )
}

export default Game;