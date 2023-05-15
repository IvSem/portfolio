import { Route, Routes } from 'react-router-dom';
import './App.scss';

import { About, Home, Layout } from 'pages';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
		</>
	);
};
