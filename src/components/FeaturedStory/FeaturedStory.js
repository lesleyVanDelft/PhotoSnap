import { featuredContent } from '../../data';
import { useMediaQuery } from 'react-responsive';
import Arrow from '../Arrow';
import './FeaturedStory.css';

const FeaturedStory = () => {
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

	return (
		<article className="FeaturedStory">
			<img
				className="backgroundImage"
				src={
					(smScreens && '/images/storiesMobile/17.jpg') ||
					(tabletScreens && '/images/storiesTablet/1.jpg') ||
					(desktopScreens && '/images/storiesDesktop/17.jpg')
				}
				alt=""
			/>

			<div className="FeaturedStory__content">
				<h6 className="FeaturedStory__topText">Last month's featured story</h6>
				<h2 className="FeaturedStory__heading">
					{featuredContent.featuredContent1.title}
				</h2>
				<p className="FeaturedStory__date">
					{featuredContent.featuredContent1.date}{' '}
					<span className="author">
						by {featuredContent.featuredContent1.author}
					</span>
				</p>
				<p className="FeaturedStory__text">
					{featuredContent.featuredContent1.body}
				</p>
				<div className="button">
					<a href="/">Read the story</a>
					<Arrow />
				</div>
			</div>
		</article>
	);
};

export default FeaturedStory;
