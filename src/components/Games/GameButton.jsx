import React from "react";

const GameButton = ({ children, onClick, disabled = false, className = '', ...rest }) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-white disabled:opacity-50 disabled:hover:bg-gray-200 transition-colors duration-200 ${className}`}
        {...rest}
    >
        {children}
    </button>
);

export default GameButton;
