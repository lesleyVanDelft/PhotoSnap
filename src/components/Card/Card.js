import { stories } from '../../data';
import { motion } from 'framer-motion';
import Arrow from '../Arrow';
import { useMediaQuery } from 'react-responsive';
import './Card.css';

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

					<div className="button">
						<button className="btnTransparentWhite">Read Story</button>
						<Arrow />
					</div>
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
