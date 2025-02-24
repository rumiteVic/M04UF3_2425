import './RollButton.css';
import { useState, useEffect } from 'react';

function RollButton(props) {	
	
	const [count, setCount] = useState(0);
	
	useEffect(() => {
		if(count > 0){
    const intervalId = setInterval(() => {
      setCount(c => c - 1);
    }, 1000);
    return () => clearInterval(intervalId);
		}
  }, [count]);

function click (){
	props.roll_func();
	setCount(5);
}
	
  return (
    <button className="RollButton" onClick={click} >
		{ count > 0 ? `${count}` : "Rol!!!"}
    </button>
  );
}

export default RollButton;
