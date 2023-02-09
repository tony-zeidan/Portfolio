import React from "react";

const TicTacToeSquare = (props) => {

  return (
          <button className={`group container justify-center items-center h-20 w-20 rounded-md text-3xl border small-content-div disabled:opacity-75`} disabled={props.over} onClick={props.onClick}>
            {props.value}
          </button>

  );
};

TicTacToeSquare.defaultProps = {
    over: false,
    value: '',
    onClick: ()=>{},
}

export default TicTacToeSquare;