import { Link } from 'react-router-dom';
import LogoTitle from 'assets/images/logo-s.png';
import './Home.scss';
import { AnimatedLetters, Logo } from 'components';
import Loader from 'react-loaders';
import { useAnimated } from 'hooks/useAnimated';

const Home = () => {
	const { letterClass } = useAnimated();

	const nameArray = [...'umenko'];
	const jobArray = [...'Front-End Dev'];

	return (
		<>
			<div className="container home-page">
				<div className="text-zone">
					<h1>
						<span className={letterClass}>H</span>
						<span className={`${letterClass} _12`}>i,</span>
						<br />
						<span className={`${letterClass} _13`}>I</span>
						<span className={`${letterClass} _14`}>'m</span>
						<img
							src={LogoTitle}
							alt="JavaScript Developer Name, Web Developer Name"
						/>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={nameArray}
							idx={15}
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
				<Logo />
			</div>
			<Loader type="pacman" />
		</>
	);
};

export default Home;
