import Boton from './components/Boton';
import BtnClear from './components/BtnClear';
import Pantalla from './components/Pantalla';
import './css/App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

	//input -> valor ingresado por el usuario
	const [input, setInput] = useState('');

	const agregarInput = (valor) => {
		setInput(input + valor);
	};

	const calcularResultado = () => {
		if(input){
			setInput(evaluate(input));
		}else{
			alert('Por favor ingrese valores para realizar calculos.');
		}
	};

	return (
		<main className='App'>
			<header className='title-contenedor'>
				<h1 className='title'>Calculadora</h1>
			</header>
			<div className='contenedor-calculadora'>
				<Pantalla input={input}/>
				<div className='fila'>
					<Boton manejarClick={agregarInput}>1</Boton>
					<Boton manejarClick={agregarInput}>2</Boton>
					<Boton manejarClick={agregarInput}>3</Boton>
					<Boton manejarClick={agregarInput}>+</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClick={agregarInput}>4</Boton>
					<Boton manejarClick={agregarInput}>5</Boton>
					<Boton manejarClick={agregarInput}>6</Boton>
					<Boton manejarClick={agregarInput}>-</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClick={agregarInput}>7</Boton>
					<Boton manejarClick={agregarInput}>8</Boton>
					<Boton manejarClick={agregarInput}>9</Boton>
					<Boton manejarClick={agregarInput}>*</Boton>	
				</div>
				<div className='fila'>
					<Boton manejarClick={calcularResultado}> = </Boton>
					<Boton manejarClick={agregarInput}>0</Boton>
					<Boton manejarClick={agregarInput}>.</Boton>
					<Boton manejarClick={agregarInput}>/</Boton>
				</div>
				<div className='fila'>
					<BtnClear manejarClear={() => setInput('')} >
						Clear
					</BtnClear>
				</div>
			</div>
		</main>
	);
}

export default App;
