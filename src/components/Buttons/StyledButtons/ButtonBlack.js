import styled from 'styled-components';

const ButtonBlack = styled.button`
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

// const ButtonBlack = ({ children, className }) => {
// 	return (
// 		<StyledButtonBlack className={className}>{children}</StyledButtonBlack>
// 	);
// };

export default ButtonBlack;
