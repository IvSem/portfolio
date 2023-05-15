import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import LogoS from 'assets/images/logo-s.png';
import LogoSubtitle from 'assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faLinkedinIn,
	faTelegram,
} from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => {
	return (
		<div className="nav-bar">
			<Link className="logo" to="/">
				<img src={LogoS} alt="logo" />
				<img className="sub-logo" src={LogoSubtitle} alt="logo-subtitle" />
			</Link>
			<nav>
				<NavLink to="/">
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
				</NavLink>

				<NavLink className={'about-link'} to="/about">
					<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
				</NavLink>

				<NavLink className={'contact-link'} to="/contact">
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
				</NavLink>
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
		</div>
	);
};

export default Sidebar;
