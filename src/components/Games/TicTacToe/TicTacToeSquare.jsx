import React from "react";

const TicTacToeSquare = (props) => {

  return (
          <button className='group container justify-center items-center h-20 w-20 small-content-div' onClick={props.onClick}>
            {props.value}
          </button>

  );
};
export default TicTacToeSquare;