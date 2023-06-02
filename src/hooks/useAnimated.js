import { useEffect } from 'react';
import { useState } from 'react';

export const useAnimated = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3500);
		return () => clearTimeout(timer);
	}, []);

	return {
		letterClass,
	};
};
