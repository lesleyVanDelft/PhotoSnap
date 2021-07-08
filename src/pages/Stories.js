import './Stories.css';
import { useMediaQuery } from 'react-responsive';
// import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSmall from '../components/HeroSmall/HeroSmall';
import HeroLarge from '../components/HeroLarge/HeroLarge';
import Card from '../components/Card/Card';
import FeaturedStory from '../components/FeaturedStory/FeaturedStory';
import Footer from '../components/Footer/Footer';

import { featuredContent } from '../data';
import Arrow from '../components/Arrow';
import ButtonLink from '../components/Buttons/StyledButtons/ButtonLink';

const Stories = () => {
	// React media queries
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
		<main className="stories">
			<Navbar />

			{smScreens && (
				<section className="row m-0 p-0">
					<HeroSmall src={'/images/storiesMobile/17.jpg'} />
					<HeroLarge
						heading={featuredContent.featuredContent1.title}
						topText={`Last month's featured story`}
						body={featuredContent.featuredContent1.body}
						date={featuredContent.featuredContent1.date}
						author={featuredContent.featuredContent1.author}
						image={tabletScreens && '/images/storiesTablet/1.jpg'}>
						<ButtonLink>Read the story </ButtonLink>
						<Arrow />
					</HeroLarge>
				</section>
			)}

			{tabletScreens && <FeaturedStory />}
			{desktopScreens && <FeaturedStory />}

			<section className="row m-0 p-0">
				<Card amount={16} />
			</section>

			<Footer />
		</main>
	);
};

export default Stories;
