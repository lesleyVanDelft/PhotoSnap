import './MobileMenu.css';

const MobileMenu = props => {
	return (
		<div className="mobile-container">
			<ul className="mobile-container__list">
				<li>Stories</li>
				<li>Features</li>
				<li>Pricing</li>
			</ul>
			<button className="buttonBlackMobile">Get an invite</button>
		</div>
	);
};

export default MobileMenu;
