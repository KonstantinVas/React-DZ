import './Input.css';
import {useState} from 'react';

function Input({type, placeholder, className}) {
	const [inputData, setInputData] = useState('');

	const inputChange = (event) => {
		setInputData(event.target.value);
	};

	return (
		<input 
			className={className}
			type={type} 
			placeholder={placeholder} 
			value={inputData} 
			onChange={inputChange} 
		/>    
	);
}

export default Input;