import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled button
const StyledBlackButton = styled.button`
	padding: 0.6rem 2rem;
	border: none;
	font-size: 0.75rem;
	font-weight: bold;
	letter-spacing: 2px;
	text-transform: uppercase;
	background: #000;
	color: #fff;
	transition: 0.1s ease-in-out;
	&:hover {
		background: #dfdfdf;
		color: #000;
	}
`;

export const BlackButton = ({ children, className }) => {
	return (
		<StyledBlackButton className={className}>{children}</StyledBlackButton>
	);
};

// Styled Router Links
const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	&:hover {
		text-decoration: underline;
	}
`;

export const NavLink = (children, className) => {
	return <StyledLink className={className}>{children}</StyledLink>;
};

const exports = { BlackButton, NavLink };

export default exports;
