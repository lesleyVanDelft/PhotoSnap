import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.div`
	position: fixed;
	width: 100%;
	left: 82%;
	bottom: 9%;
	height: 30px;
	font-size: 3rem;
	z-index: 120;
	cursor: pointer;
	color: #dddddd;
	opacity: 0.9;

	@media screen and (min-width: 1200px) {
		display: none;
	}
`;

const TopScroll = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		const width = window.innerWidth;
		if (scrolled > 600 && width < 1200) {
			setVisible(true);
		} else if (scrolled <= 600) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<Button className="scrollTopButton">
			<FaArrowCircleUp
				onClick={scrollToTop}
				style={{ display: visible ? 'inline' : 'none' }}
			/>
		</Button>
	);
};

export default TopScroll;
