import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { stories } from '../../data';
import Arrow from '../Arrow';
import ButtonLink from '../Buttons/StyledButtons/ButtonLink';
import './Card.css';

const BtnContainer = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	padding-top: 1rem;
`;

const ButtonCard = styled(ButtonLink)`
	align-self: flex-start;
	background: none;
	font-size: 0.75rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	width: 95%;
	display: flex;
	justify-content: space-between;
`;

const Card = props => {
	const storiesHome = stories.slice(0, `${props.amount}`);

	const tabletScreens = useMediaQuery({
		minWidth: 768,
		maxWidth: 1200,
	});
	const desktopScreens = useMediaQuery({
		minWidth: 1200,
	});
	const smScreens = useMediaQuery({
		maxWidth: 768,
	});

	return storiesHome.map(story => {
		return (
			<motion.article
				className="Card col-md-6 col-xl-3"
				key={story.id}
				whileHover={{
					y: '-1.1625rem',
				}}>
				<div className="Card__content ">
					<div className="Card__content-text">
						<h2 className="Card__title">{story.title}</h2>
						<p className="Card__author">by {story.author}</p>
					</div>

					{/* <div className="button">
						<ButtonLink href={'/'}>
							Get an invite <Arrow />
						</ButtonLink>
					</div> */}
					<BtnContainer>
						<ButtonCard href={'/'}>
							Read story <Arrow />
						</ButtonCard>
					</BtnContainer>
				</div>

				<figure className="Card__image">
					<img
						src={
							(smScreens ? story.srcMobile : undefined) ||
							(tabletScreens ? story.srcDesktop : undefined) ||
							(desktopScreens ? story.srcDesktop : undefined)
						}
						alt=""
					/>
				</figure>
			</motion.article>
		);
	});
};

export default Card;
