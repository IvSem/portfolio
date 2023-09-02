import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import LogoS from 'assets/images/logo-s.png';
import LogoSubtitle from 'assets/images/logo_sum_sub.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faUser,
	faEnvelope,
	faBriefcase,
	faBars,
	faClose,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
	const [showNav, setShowNav] = useState(false);

	return (
		<div className="nav-bar">
			<Link className="logo" to="/" onClick={() => setShowNav(false)}>
				<img src={LogoS} alt="logo" />
				<img className="sub-logo" src={LogoSubtitle} alt="logo-subtitle" />
			</Link>
			<nav className={showNav ? 'mobile-show' : ''}>
				<NavLink to="/" exact="true" activeclassname="active" onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
				</NavLink>

				<NavLink
					className={'about-link'}
					to="/about"
					activeclassname="active"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
				</NavLink>

				<NavLink
					className={'contact-link'}
					to="/contact"
					activeclassname="active"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
				</NavLink>

				<NavLink
					className={'portfolio-link'}
					to="/works"
					activeclassname="active"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
				</NavLink>
				<FontAwesomeIcon
					onClick={() => setShowNav(false)}
					icon={faClose}
					color="#ffd700"
					size="3x"
					className="close-icon"
				/>
			</nav>
			<ul>
				<li>
					<a
						href="https://www.linkedin.com/in/ivan-sumenko-34672225b"
						target={'_blank'}
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
					</a>
				</li>
				<li>
					<a href="https://github.com/IvSem" target={'_blank'} rel="noreferrer">
						<FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
					</a>
				</li>
				<li>
					<a href="https://t.me/IvSemII" target={'_blank'} rel="noreferrer">
						<FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
					</a>
				</li>
			</ul>
			<FontAwesomeIcon
				onClick={() => {
					console.log('click');
					setShowNav(true);
				}}
				icon={faBars}
				color="#ffd700"
				size="3x"
				className="hamburger-icon"
			/>
		</div>
	);
};

export default Sidebar;
