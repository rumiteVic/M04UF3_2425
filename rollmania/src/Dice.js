import './Dice.css';
import Die from './Die.js';

function get_dice (cantidad, roll)
{
	let dice_list = [];
	for (let i = 0; i < cantidad; i++){
	
	dice_list.push(<Die key={i} roll={roll} />);

	}
	return dice_list;
}

function Dice(props) {
  	return (
    <div className="Dice">
			{get_dice(props.cantidad, prop.roll)}
		</div>
 );
}

export default Dice;
