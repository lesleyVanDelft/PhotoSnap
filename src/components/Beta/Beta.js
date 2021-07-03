import './Beta.css';
import Arrow from '../Arrow';
import { Link } from 'react-router-dom';

const Beta = ({ src, children }) => {
	return (
		<section className="Beta">
			<figure className="Beta__image">
				<img src={src} alt="" />
			</figure>
			<div className="Beta__content">
				<h2>We’re in beta. Get your invite today!</h2>
				<button className="generalButton">
					<Link to="/">Get an invite</Link> <Arrow />
				</button>
			</div>
		</section>
	);
};

export default Beta;
