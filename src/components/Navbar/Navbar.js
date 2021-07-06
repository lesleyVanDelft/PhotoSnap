import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlackButton } from '../../styled';
import logo from '../../assets/logo.svg';
import hamburger from '../../assets/shared/mobile/menu.svg';
import close from '../../assets/shared/mobile/close.svg';
import './Navbar.css';
import MobileMenu from './MobileMenu/MobileMenu';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
	// handle mobile menu toggle
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	// NPM media queries
	const bigScreens = useMediaQuery({
		query: '(min-device-width: 768px)',
	});
	const smScreens = useMediaQuery({
		query: '(max-device-width: 768px)',
	});

	return (
		<>
			{smScreens && (
				<nav className="navbar navbar-mobile">
					<figure className="logo">
						<Link to="/">
							<img src={logo} alt="" />
						</Link>
					</figure>

					{isOpen || (
						<figure className={'hamburgerToggle'} onClick={handleClick}>
							<img src={hamburger} alt="" />
						</figure>
					)}

					{isOpen && (
						<figure className={'hamburgerToggle'} onClick={handleClick}>
							<img src={close} alt="" />
						</figure>
					)}

					{isOpen === true ? <MobileMenu /> : null}
				</nav>
			)}

			{bigScreens && (
				<nav className="navbar navbar-desktop">
					<figure className="logo">
						<Link to="/">
							<img src={logo} alt="" />
						</Link>
					</figure>

					<ul className="navbar-desktop__list">
						<Link to="/stories">Stories</Link>
						<Link to="/features">Features</Link>
						<Link to="/pricing">Pricing</Link>
					</ul>
					{/* <button className="buttonBlackDesktop">Get an invite</button> */}
					<BlackButton>Get an invite</BlackButton>
				</nav>
			)}
		</>
	);
};

export default Navbar;
