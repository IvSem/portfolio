import LogoTitle from 'assets/images/logo-s.png';
import { AnimatedLetters } from 'components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
	const [letterClass, setLetterClass] = useState('text-animate');

	const nameArray = [...'umenko'];
	const jobArray = [...'Front-End Dev.'];

	//useEffect(() => {
	//	let timeoutId;
	//	timeoutId = setTimeout(() => {
	//		setLetterClass('text-animate-hover');
	//	}, 4000);

	//	return () => {
	//		clearTimeout(timeoutId);
	//	};
	//}, []);
	useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 4000);

		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="container home-page">
			<div className="text-zone">
				<h1>
					<span className={letterClass}>H</span>
					<span className={`${letterClass} _12`}>i</span>
					<span className={`${letterClass} _13`}>,</span>
					<br />
					<span className={`${letterClass} _14`}>I</span>
					<span className={`${letterClass} _15`}>’</span>
					<span className={`${letterClass} _16`}>m</span>
					<img src={LogoTitle} alt="dev" />
					<AnimatedLetters
						letterClass={letterClass}
						strArray={nameArray}
						idx={16}
					/>
					<br />
					<AnimatedLetters
						letterClass={letterClass}
						strArray={jobArray}
						idx={22}
					/>
				</h1>
				<h2>Front-End Developer / Freelancer</h2>
				<Link to="/contact" className="flat-button">
					CONTACT ME
				</Link>
			</div>
		</div>
	);
};

export default Home;
