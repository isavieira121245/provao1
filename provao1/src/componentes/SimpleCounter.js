import React, { useState } from 'react';
import './SimpleCounter.css';

const SimpleCounter = () => {
  const [contador, setContador] = useState(0);
const adicionar = () => {
  setContador(contador + 1);
  };
  const subtrair = () => {
   setContador(contador - 1);
   };

return (  
<div className="simple-counter">
                             
 <h2>Contador: {contador}</h2>
 <button onClick={adicionar}>Adicionar</button> 
<button onClick={subtrair}>Subtrair</button> </div>
 );
 };

export default SimpleCounter;