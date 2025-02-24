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
if(count === 0){
    setCount(5);
    props.roll_func();
}
}

  return (
    <button className="RollButton" onClick={click} >
    {count > 0? `${count}` : "Roll!!!" }
    </button>
  );
}

export default RollButton;
