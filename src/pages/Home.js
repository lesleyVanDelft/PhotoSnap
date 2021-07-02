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
		<main className="homepage">
			<Navbar />
			<section className="row m-0 p-0 flex-row-reverse">
				<HeroSmall
					src={
						(smScreens && '/images/home/homeMobile/create-and-share.jpg') ||
						(tabletScreens && '/images/home/homeTablet/create-and-share.jpg') ||
						(desktopScreens && '/images/home/homeDesktop/create-and-share.jpg')
					}
					columns="col-md-4 col-xl-7"
				/>

				<HeroLarge
					heading={content.content1.title}
					body={content.content1.body}
					columns="col-md-8 col-xl-5">
					<a href="/">Get an invite</a>
					<Arrow />
				</HeroLarge>
			</section>

			<section className="row m-0 p-0">
				<HeroSmall
					src={
						(smScreens && '/images/home/homeMobile/beautiful-stories.jpg') ||
						(tabletScreens &&
							'/images/home/homeTablet/beautiful-stories.jpg') ||
						(desktopScreens && '/images/home/homeDesktop/beautiful-stories.jpg')
					}
					columns="col-md-4 col-xl-7"
				/>
				<HeroLarge
					classColor="white"
					heading={content.content2.title}
					body={content.content2.body}
					columns={'col-md-8 col-xl-5'}>
					<a href="/">Get an invite</a>
					<ArrowBlack />
				</HeroLarge>
			</section>

			<section className="row m-0 p-0 flex-row-reverse">
				<HeroSmall
					src={
						(smScreens &&
							'/images/home/homeMobile/designed-for-everyone.jpg') ||
						(tabletScreens &&
							'/images/home/homeTablet/designed-for-everyone.jpg') ||
						(desktopScreens &&
							'/images/home/homeDesktop/designed-for-everyone.jpg')
					}
					columns="col-md-4 col-xl-7"
				/>
				<HeroLarge
					classColor="white"
					heading={content.content3.title}
					body={content.content3.body}
					columns={'col-md-8 col-xl-5'}>
					<a href="/">Get an invite</a>
					<ArrowBlack />
				</HeroLarge>
			</section>

			<section className="row p-0 m-0">
				<Card amount={4} />
			</section>

			<section className="row p-0 m-0 mt-3 features">
				<FeaturesCard amount={3} />
			</section>

			<Footer />
		</main>
	);
};

export default Home;
