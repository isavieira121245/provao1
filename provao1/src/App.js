import React, {useState} from 'react'
import './App.css';
 
function App() {
 
  const [contador, setContador] = useState(0);
 
  return (
    <div className="App">
    <p>Você clicou {contador} vezes </p>
    <button onClick={() => setContador(contador + 1)}>
clique +1
 
    </button>
 
    </div>
  );
}
export default App;