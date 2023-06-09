import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'; //es un Hook que permite añadir el estado de React a un componente funcional
import { useDispatch } from 'react-redux'; // Es una función que permite lanzar acciones (actions) al store, con la intención de afectar el estado.
import { getPokemonsByName } from '../actions';

const SearchBar = ({ setCurrentPage }) => {

	const Btn = styled.button`
		font-size: 16px;
		width: 150px;
		padding: 10px 5px;
		border-radius: 5px;
		border: 1px solid #7e7e7e;
		background: #1e2125;
		color: #e2dddd;
		cursor: pointer;
		&:hover {
			background-color: #c0bbbb5e;
		}
		@media (max-width: 900px) {
			& {
				width: 20vw;
			}
		}
	`;

	const dispatch = useDispatch();
	const [pokeName, setPokeName] = useState('');

	//sincroniza el valor de los campos con el estado usando componentes controlados
	function handleInputChange(e) {
		e.preventDefault();
		setPokeName(e.target.value);
	}
	// se usa para especificar el método que debe de ejecutarse cuando el formulario es guardado.
	function handleSubmit(e) {
		e.preventDefault();
		dispatch(getPokemonsByName(pokeName.trim()));
		setCurrentPage(1);
	}

	const Btn2 = styled.button`
		font-size: 16px;
		width: 150px;
		padding: 10px 5px;
		border-radius: 5px;
		border: 1px solid #7e7e7e;

		color: #e2dddd;
		cursor: not-allowed;
		background-color: #a5a5a5ef;

		@media (max-width: 900px) {
			& {
				width: 20vw;
			}
		}
	`;

	return (
		<form>
			<input
				style={{
					padding: '10px 20px',
					borderRadius: '5px',
					border: '1px solid #7e7e7e',
					background: '#1e2125',
					color: '#e2dddd',
					fontSize: '16px',
					margin: '10px 0 10px',
					width: '300px',
					flexBasis: '30%',
				}}
				type='text'
				placeholder='Buscar Pokemon'
				onChange={(e) => handleInputChange(e)}
			></input>
			{pokeName.trim() === '' || pokeName.trim().length < 3 ? (
				<Btn2 disabled>Buscar</Btn2>
			) : (
				<Btn
					type='submit'
					onClick={(e) => {
						handleSubmit(e);
					}}
				>
					Buscar
				</Btn>
			)}
		</form>
	);
};

export default SearchBar;
