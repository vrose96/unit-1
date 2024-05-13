import React from "react";

const Square = (props) => {
    console.log(props.squares, props.player);

    const handleClick = () => {
        if (!props.squareValue) {
            const nextSquares = props.squares.slice(); 
            if (props.player) {
                nextSquares[props.index] = "X";
            } else {
                nextSquares[props.index] = "O";
            }
            props.setSquares(nextSquares);
            props.setPlayer(!props.player);
        }
    };
    

    return (
        <div className="square" onClick={handleClick}>
            {props.squareValue === "O" ? (
                <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" alt="Devmountain Logo" />
            ) : (
                props.squareValue
            )}
        </div>
    );
};

export default Square;
