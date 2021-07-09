import styled from 'styled-components';

const StyledNavbar = styled.nav`
	height: 4.5rem;
	padding: 1.5rem 1.5rem;
	display: flex;
	align-items: center;
	background-color: #fff;
	position: relative;
	transition: 0.5s all ease-in-out;
	flex-wrap: nowrap;
	font-family: 'DM Sans', sans-serif;
	justify-content: space-around;

	.logo {
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;

		img {
			width: 10.625rem;
			height: 1rem;
		}
	}

	.hamburgerToggle,
	.close {
		margin: 0;
	}

	@media screen and (max-width: 768px) {
		justify-content: space-between;
	}
`;

const NavbarMobile = styled(StyledNavbar)`
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const NavbarDesktop = styled(StyledNavbar)`
	@media screen and (min-width: 768px) {
		display: flex;
		align-items: center;
	}
`;

const UlDesktop = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	list-style-type: none;
	font-weight: bolder;
	letter-spacing: 2px;
	text-transform: uppercase;
	margin: 0;
	font-size: 0.75rem;
	a {
		margin-right: 2.6125rem;
		color: inherit;
		text-decoration: none;

		&:hover {
			opacity: 0.4;
		}
	}
`;

export { StyledNavbar, NavbarDesktop, NavbarMobile, UlDesktop };
