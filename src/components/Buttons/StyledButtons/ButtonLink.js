import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonLink = styled(Link)`
	color: ${props => (props.colorblack ? '#000' : '#FFF')};

	font-family: 'DM Sans', sans-serif;
	font-size: 0.75rem;
	letter-spacing: 2px;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: bold;

	svg {
		margin-left: 1rem;
	}

	&:hover {
		text-decoration: underline;
		color: ${props => (props.colorblack ? '#000' : '#FFF')};
	}
`;

ButtonLink.defaultProps = {
	to: '/',
};

export default ButtonLink;
