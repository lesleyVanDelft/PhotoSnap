import styled from 'styled-components';

const PriceButton = styled.button`
	background: #000;
	font-family: 'DM Sans', sans-serif;
	font-weight: bold;
	letter-spacing: 2px;
	width: 15.3125rem;
	height: 2.5rem;
	text-transform: uppercase;

	a {
		text-decoration: none;
		color: #fff;
	}
`;

const PricingButton = ({ children }) => {
	return <PriceButton>{children}</PriceButton>;
};

export default PricingButton;
