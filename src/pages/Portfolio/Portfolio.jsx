import { AnimatedLetters } from 'components';
import { useAnimated } from 'hooks/useAnimated';
import Loader from 'react-loaders';
import './Portfolio.scss';
import portfolioData from 'assets/data/portfolio.json';

const Portfolio = () => {
	const { letterClass } = useAnimated();

	const renderPortfolio = data => {
		return (
			<div className="images-container">
				<img src="/public/portfolio/1/one.png" alt="123" />
				{data?.map(el => {
					console.log(el);
					return <div key={el.id} className="image-box"></div>;
				})}
			</div>
		);
	};
	return (
		<>
			<div className="container portfolio-page">
				<h1 className="page-title">
					<AnimatedLetters
						letterClass={letterClass}
						strArray={[...'My Works']}
						idx={15}
					/>
				</h1>
				<div>{renderPortfolio(portfolioData.portfolio)}</div>
			</div>
			<Loader type="pacman" />
		</>
	);
};
export default Portfolio;
