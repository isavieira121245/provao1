function contador(){
    return(
        <div className="App">
       <p>Você clicou {contador} vezes</p>
       <button onClick={()=> setContador(contador + 1)}>
           Clique Aqui
       </button>
        </div>
       );
}

export default contador;