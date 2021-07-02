import Navbar from '../components/Navbar/Navbar';
import HeroSmall from '../components/HeroSmall/HeroSmall';
import HeroLarge from '../components/HeroLarge/HeroLarge';
import { content } from '../data';
import Arrow from '../components/Arrow';
import ArrowBlack from '../components/ArrowBlack';
import Card from '../components/Card/Card';
import FeaturesCard from '../components/FeaturesCard/FeaturesCard';
import Footer from '../components/Footer/Footer';

import { useMediaQuery } from 'react-responsive';
import './Home.css';

const Home = () => {
	// NPM media queries
	const tabletScreens = useMediaQuery({
		query: '(min-device-width: 768px)',
	});
	const desktopScreens = useMediaQuery({
		query: '(min-device-width: 1080px',
	});
	const smScreens = useMediaQuery({
		query: '(max-device-width: 768px)',
	});

	return (
		<main className="homepage">
			<Navbar />
			<section className="row m-0 p-0 flex-row-reverse">
				{smScreens && (
					<HeroSmall
						// src={setImageSize}
						src="/images/home/homeMobile/create-and-share.jpg"
						columns="col-md-4"
					/>
				)}
				{tabletScreens && (
					<HeroSmall
						// src={setImageSize}
						src="/images/home/homeTablet/create-and-share.jpg"
						columns="col-md-4"
						class
					/>
				)}
				{desktopScreens && (
					<HeroSmall
						// src={setImageSize}
						src="/images/home/homeDesktop/create-and-share.jpg"
						columns="col-md-4"
					/>
				)}

				<HeroLarge
					heading={content.content1.title}
					body={content.content1.body}
					columns="col-md-8">
					<a href="/">Get an invite</a>
					<Arrow />
				</HeroLarge>
			</section>

			<section className="row m-0 p-0">
				<HeroSmall src="/images/home/homeMobile/beautiful-stories.jpg" />
				<HeroLarge
					classColor="white"
					heading={content.content2.title}
					body={content.content2.body}
					columns={'col-md-6'}>
					<a href="/">Get an invite</a>
					<ArrowBlack />
				</HeroLarge>
			</section>

			<HeroSmall src="/images/home/homeMobile/designed-for-everyone.jpg" />
			<HeroLarge
				classColor="white"
				heading={content.content3.title}
				body={content.content3.body}>
				<a href="/">Get an invite</a>
				<ArrowBlack />
			</HeroLarge>

			<Card amount={4} />
			<FeaturesCard amount={3} />

			<Footer />
		</main>
	);
};

export default Home;
