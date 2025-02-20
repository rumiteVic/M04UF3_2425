import './Section.css';
import { useState } from 'react';


function Section() {

let [countdown, num] = useState(5);
function what(){
num(countdown - 1 );
if(countdown <=0){
clearInterval(intervalo);
}
}

let intervalo = setInterval(what, 1000);
return (
    <p className = "Section">{countdown}</p>
);
}

export default Section;
