import './MobileMenu.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BlackButton } from '../../../styled';

const MobileButton = styled(BlackButton)`
	align-self: center;
	width: 85%;
	border: none;
	background: #000;
	color: #fff;
	padding: 0.8rem 0;
	margin-top: 0rem;
	margin-bottom: 2rem;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 2.5px;
`;

const MobileMenu = props => {
	return (
		<div className="mobile-container">
			<ul className="mobile-container__list">
				<Link to="/stories">Stories</Link>
				<Link to="/features">Features</Link>
				<Link to="/pricing">Pricing</Link>
			</ul>
			{/* <button className="buttonBlackMobile">Get an invite</button> */}
			<MobileButton> Get an invite</MobileButton>
		</div>
	);
};

export default MobileMenu;
