import './Dice.css';
import Die from './Die.js';

function Dice(props) {
	let total = 0;
	function add_result (value) {
		total +=value;
		console.log(value+" "+total);
	}
function get_dice (quantity, roll) {

	let dice_list = [];
	let num_list = [];

	for (let i = 0; i < quantity; i++){
		dice_list.push(<Die key={i} roll={roll} onResult={add_result} />);
	}

	return dice_list;
}


	return (
		<div className="Dice">
			{get_dice(props.cantidad, props.roll)}
		</div>
	);

}

export default Dice;
