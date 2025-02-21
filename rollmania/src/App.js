import './App.css';
import Die from './Die.js';
import Title from './Title.js';
import Dice from './Dice.js';
import Roll_Button from './Roll_Button.js';
import Scores from './Scores.js';
import { useState } from 'react';
function App() {

	let [roll,setRoll] = useState(false);

	function roll_dice(){

	setRoll(true);

	}
	return (
    <div className="rollmania">
        <Title text="Gambling Addiction!!!"/>
        <main className="App">
				<Dice cantidad ="5" roll={roll}/>
				<Roll_Button roll_func={roll_dice}/>
				<Scores />
				</main>
    </div>
 );
}

export default App;
