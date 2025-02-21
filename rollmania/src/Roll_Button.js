import './Roll_Button.css';

function Roll_Button(props) {
 
 return (
    <button className="Roll_Button" onClick={props.roll_func}>
		<p>Roll!!!</p>
		</button>
  );
}

export default Roll_Button;
