import './Scores.css';
import { useState } from 'react';

function PlayerName(props) {
let [player_name, setPlayerName] = useState("");


  return (
	<p><input type="text" name="player_name" placeholder={player_name === "" ? "Nombre del jugador" : player_name} /><button>Guardar</button></p>
 );
}

export default PlayerName;
