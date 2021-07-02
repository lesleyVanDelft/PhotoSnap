import './MobileMenu.css';
import { Link } from 'react-router-dom';

const MobileMenu = props => {
	return (
		<div className="mobile-container">
			<ul className="mobile-container__list">
				<Link to="/stories">Stories</Link>
				<Link to="/features">Features</Link>
				<Link to="/pricing">Pricing</Link>
			</ul>
			<button className="buttonBlackMobile">Get an invite</button>
		</div>
	);
};

export default MobileMenu;
