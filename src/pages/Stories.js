import './Stories.css';
import Navbar from '../components/Navbar/Navbar';
import HeroSmall from '../components/HeroSmall/HeroSmall';
import HeroLarge from '../components/HeroLarge/HeroLarge';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

import { featuredContent } from '../data';
import Arrow from '../components/Arrow';

const Stories = () => {
	return (
		<main className="stories">
			<Navbar />
			<section className="row m-0 p-0">
				<HeroSmall src={'/images/storiesMobile/17.jpg'} />
				<HeroLarge
					heading={featuredContent.featuredContent1.title}
					topText={`Last month's featured story`}
					body={featuredContent.featuredContent1.body}
					date={featuredContent.featuredContent1.date}
					author={featuredContent.featuredContent1.author}>
					<a href="/">Read the story</a>
					<Arrow />
				</HeroLarge>
			</section>

			<section className="row m-0 p-0">
				<Card amount={16} />
			</section>

			<Footer />
		</main>
	);
};

export default Stories;
