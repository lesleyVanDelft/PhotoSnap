import styled from 'styled-components';

const Heading2 = styled.h2`
	font-size: 2rem;
	color: ${props => (props.black ? '#000' : '#fff')};
	letter-spacing: 0.2083rem;
	line-height: 40px;
	font-weight: bold;
	text-transform: uppercase;
	text-align: ${props => (props.center ? 'center' : undefined)};

	@media screen and (min-width: 768px) {
		font-size: 2.5rem;
		letter-spacing: 0.2606rem;
		line-height: 3rem;
	}
`;

const Heading4 = styled.h4`
	font-size: 12px;
	font-weight: bold;
	letter-spacing: 2px;
	font-family: 'DM Sans';
	text-transform: uppercase;
	color: #000;
	flex: 40%;

	@media screen and (min-width: 768px) {
		/* margin: 0; */
	}
`;

const Heading6 = styled.h6`
	color: #fff;
	letter-spacing: 2px;
	font-weight: bold;
	line-height: auto;
	text-transform: uppercase;
`;

const Paragraph = styled.p`
	font-family: 'DM Sans';
	font-size: 0.9375rem;
	letter-spacing: 0;
	line-height: 1.5625rem;
	opacity: 0.7;
	margin: 1rem 0rem;

	@media screen and (min-width: 768px) {
		font-weight: normal;
		line-height: 1.5625rem;
		margin-bottom: 3rem;
		margin-top: 1.3125rem;
	}
`;

export { Heading2, Heading4, Heading6, Paragraph };
