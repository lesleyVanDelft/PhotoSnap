import styled from 'styled-components';

const HeroLargeContainer = styled.div`
	position: relative;
	min-height: 26.1875rem;
	background: #000;
	// width: auto;
	margin: 0;
	padding: 1.5rem;
	padding-top: 4.5rem;
	padding-left: 2.0625rem;
	padding-right: 1rem;
	padding-bottom: 5rem;
	font-family: 'DM Sans', sans-serif;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 2.375rem;
		z-index: 50;
		height: 0.375rem;
		width: 8rem;
		background: linear-gradient(#5a77ff, #bc7198, #ffc593);
	}

	&.white {
		background: #fff;
		h2 {
			color: #000;
		}

		p {
			color: #000;
		}

		button {
			background: #fff;
			a {
				color: #000;
			}
		}
	}

	@media screen and (min-width: 768px) {
		padding: 0 2.6875rem;
		display: flex;
		justify-content: center;
		align-items: center;

		&::before {
			width: 0.375rem;
			height: 304px;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}
`;

const Content = styled.div`
	padding: 0 2.6rem;
	padding-left: 3.5rem;
	padding-right: 4.5rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	color: #fff;

	@media screen and (min-width: 768px) {
		/* padding-left: 2.0625rem;
		padding-right: 1rem; */
	}
`;

export { HeroLargeContainer, Content };
