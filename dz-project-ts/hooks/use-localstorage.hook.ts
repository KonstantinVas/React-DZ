import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (newData: T) => void] {
	const [data, setData] = useState<T>(() => {
		try {
			const storedData = localStorage.getItem(key);
			return storedData ? JSON.parse(storedData) as T : initialValue;
		} catch (error) {
			console.error('Error reading from localStorage:', error);
			return initialValue;
		}
	});

	const saveData = (newData: T) => {
		try {
			localStorage.setItem(key, JSON.stringify(newData));
			setData(newData);
		} catch (error) {
			console.error('Error saving to localStorage:', error);
		}
	};

	return [data, saveData];
}
