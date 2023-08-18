// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
	//const squarepropVar = "This is a Prop";
	// 	Using array destructuring initialize the state for the games squares to an array of 9 empty strings
	// Using the same method initialize state of the player variable to a boolean of true. here of player is  true, the player with x plays and if false the player plays with O and each time a plyer plays, we will toggle so we know now its the other players turn
	const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
	const [player, setPlayer] = useState(true);
	const resetButtonHandler=()=>{
		setSquares(["", "", "", "", "", "", "", "", ""])
		setPlayer(true);
	}
	const calculateWinner=(sqrArray)=>{
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],

		]
		//destructure each subarray to check if there is a win
		for (let i=0;i<lines.length;i++){
			let [a,b,c] = lines[i];
			//if sqrArray[a] - this checks if it is empty or not, or else when u begin the game it will show u won
			if(sqrArray[a] &&
				sqrArray[b]===sqrArray[a]&&
				sqrArray[b]===sqrArray[c]){
					return " Winner :  "+sqrArray[a] 

			}
		}
		return "who will win?"
	}

	return (
		<div className="App">
			<div className="container">
				{squares.map((value, index) => {
					return (
						<Square
							squares={squares}
							setSquares={setSquares}
							player={player}
							setPlayer={setPlayer}
							squareValue={value}
							index={index}

						> "DOM"</Square>
					);
				})}
				
{/* <Square squares={squares}
			 setSquares={setSquares}
				player={player}
				 setPlayer={setPlayer} /> */}

			</div> 

			<button onClick= {resetButtonHandler}> RESET </button>
<span>{calculateWinner(squares)}</span>
		</div>
	);
}

export default App;
