/* React imports */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

/* SVG imports*/
import logo from '../../assets/logo.svg';
import hamburger from '../../assets/shared/mobile/menu.svg';
import close from '../../assets/shared/mobile/close.svg';

/* Styled imports */
import { NavbarDesktop, NavbarMobile, UlDesktop } from './Navbar.style';
import ButtonBlack from '../Buttons/StyledButtons/ButtonBlack';

/*Component imports */
import MobileMenu from './MobileMenu/MobileMenu';

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
				<NavbarMobile>
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
				</NavbarMobile>
			)}

			{bigScreens && (
				<NavbarDesktop>
					<figure className="logo">
						<Link to="/">
							<img src={logo} alt="PhotoSnap logo" />
						</Link>
					</figure>

					<UlDesktop>
						<li>
							<Link to="/stories">Stories</Link>
						</li>
						<li>
							<Link to="/features">Features</Link>
						</li>
						<li>
							<Link to="/pricing">Pricing</Link>
						</li>
					</UlDesktop>
					<ButtonBlack>Get an invite</ButtonBlack>
				</NavbarDesktop>
			)}
		</>
	);
};

export default Navbar;
