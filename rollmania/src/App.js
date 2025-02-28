import './App.css';
import Title from './Title.js';
import Dice from './Dice.js';
import RollButton from './RollButton.js';
import PlayerName from './PlayerName.js';
import Scores from './Scores.js';

import { useState } from 'react';

function App() {

	let [roll, setRoll] = useState(false);

	function roll_dice ()
	{
		setRoll(true);
	}

  return (
		<div className="rollmania">
			<Title title_text="Rollmania!!!" />
	   <PlayerName />
		 <main className="App">
				<Dice cantidad="5" roll={roll} />
    	</main>
			<RollButton roll_func={roll_dice}/>
			<Scores />
		</div>
  );
}

export default App;
