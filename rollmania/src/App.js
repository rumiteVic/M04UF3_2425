import './App.css';
import Title from './Title.js';
import Dice from './Dice.js';
import RollButton from './RollButton.js';
import PlayerName from './PlayerName.js';
import Scores from './Scores.js';
import ScoreItem from './ScoreItem.js';
import { useState, useRef } from 'react';

function App() {

	const [roll, setRoll] = useState(false);	
	const [score, setScore] = useState({});
	const player_name = useRef("");
	const player_score = useRef(0);
	function roll_dice ()
	{
		setRoll(true);
	}

	function set_player_name (name) {
		player_name.current = name;
		console.log("El nombre del jugador es:"+name);
	}

	function set_player_score (total) {
		player_score.current = total;
		console.log("Puntuación total:"+total);
		
	}


	
  return (
		<div className="rollmania">
			<Title title_text="Rollmania!!!" />
	   <PlayerName onPlayerNameChange={set_player_name} />
		 <main className="App">
				<Dice cantidad="5" roll={roll} onTotal={set_player_score} />
    	</main>
			<RollButton roll_func={roll_dice}/>
			<Scores />
			<ScoreItem />
		</div>
  );
}

export default App;
