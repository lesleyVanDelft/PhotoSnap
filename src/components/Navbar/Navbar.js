import { useState } from 'react';
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
						<img src={logo} alt="" />
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
						<img src={logo} alt="" />
					</figure>

					<ul className="navbar-desktop__list">
						<li>Stories</li>
						<li>Features</li>
						<li>Pricing</li>
					</ul>
					<button className="buttonBlackDesktop">Get an invite</button>
				</nav>
			)}
		</>
	);
};

export default Navbar;
