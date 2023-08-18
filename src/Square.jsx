import React, { userState } from "react";

const Square = (props) => {
	console.log(props.squares);
	console.log("player  " + props.player);

	const handleClick = () => {
		// 		Check if there is a value in props.squareValue
		// If there is no value, but the player state that is passed through props is true, change the value of props.squares at props.index to “X”, invoke the setSquares function from props passing the new squares array, and toggle the value of props.player
		// Otherwise change the value at props.index to “O”, invoke props.setSquares with the new value of props.squares and toggle the value of props.player
		if (!props.squareValue) {
			if (props.player) {
				props.squares[props.index] = "X";
				//or  props.squares.splice(props.index, 1, "X");
			} else {
				props.squares[props.index] = "O";
			}
			props.setSquares(props.squares);
			props.setPlayer(!props.player);
		}
	};

	return (
		<div className="square" onClick={handleClick}>
			{/* {props.index}  */}
			{props.squareValue === "O" ? "O" : props.squareValue}
			{/* {props.squareValue === "O" ?<img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" />  : props.squareValue} */}
			
		</div>
	);
};
export default Square;
