import { useState } from 'react';

export function useLocalStorage(key, initialValue = []) {
	const [data, setData] = useState(() => {
		try {
			const storedData = localStorage.getItem(key);
			return storedData ? JSON.parse(storedData) : initialValue;
		} catch (error) {
			console.error('Error reading from localStorage:', error);
			return initialValue;
		}
	});

	const saveData = (newData) => {
		try {
			localStorage.setItem(key, JSON.stringify(newData));
			setData(newData);
		} catch (error) {
			console.error('Error saving to localStorage:', error);
		}
	};

	return [data, saveData];
}