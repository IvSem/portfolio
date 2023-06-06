import { Route, Routes } from 'react-router-dom';
import './App.scss';

import { About, Contacts, Home, Layout, Portfolio } from 'pages';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contacts />} />
					<Route path="works" element={<Portfolio />} />
				</Route>
			</Routes>
		</>
	);
};
