import './PlayerName.css';
import { useState, useEffect } from 'react';

function PlayerName(props) {
let [player_name, setPlayerName] = useState("");
let [show_name, setShowName] = useState(false);

useEffect( () =>{
if(show_name)
	props.onPlayerNameChange(player_name);
} );

function update_name (event) {
	console.log(event.target.value);
	setPlayerName(event.target.value);
	}

	function write_name(event) {
		console.log("Nombre: "+player_name);
		let pn_tmp = player_name.trim();
		

		if (pn_tmp.length < 3 || pn_tmp > 12)
		return;
		setShowName(true);
	} 

if (!show_name){
  return (
	<p>
	<input type="text" name="player_name" placeholder="Nombre del jugador" onChange={update_name} />
	<button onClick={write_name}>Guardar</button>
	</p>
 );
}
else {
	return (
		<h2>{player_name}</h2>
	);
	}
}


export default PlayerName;
