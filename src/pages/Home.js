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
	// const tabletScreens = useMediaQuery({
	// 	query: '(max-device-width: 1200px)',
	// });
	const tabletScreens2 = useMediaQuery({
		query: '(min-device-width: 768px)',
	});
	const desktopScreens = useMediaQuery({
		query: '(min-device-width: 1200px',
	});
	const smScreens = useMediaQuery({
		query: '(max-device-width: 768px)',
	});

	return (
		<main className="homepage">
			<Navbar />
			<section className="row m-0 p-0 flex-row-reverse">
				{/* {smScreens && (
					<HeroSmall
						// src={setImageSize}
						src="/images/home/homeMobile/create-and-share.jpg"
						columns="col-md-4"
					/>
				)}
				{tabletScreens && tabletScreens2 && (
					<HeroSmall
						// src={setImageSize}
						src="/images/home/homeTablet/create-and-share.jpg"
						columns="col-md-4"
					/>
				)}
				{desktopScreens && (
					<HeroSmall
						// src={setImageSize}
						src="/images/home/homeDesktop/create-and-share.jpg"
						columns="col-md-4 col-xl-7"
					/>
				)} */}

				<HeroSmall
					src={
						(smScreens && '/images/home/homeMobile/create-and-share.jpg',
						tabletScreens2 && '/images/home/homeTablet/create-and-share.jpg',
						desktopScreens && '/images/home/homeDesktop/create-and-share.jpg')
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
						(smScreens && '/images/home/homeMobile/beautiful-stories.jpg',
						tabletScreens2 && '/images/home/homeTablet/beautiful-stories.jpg',
						desktopScreens && '/images/home/homeDesktop/beautiful-stories.jpg')
					}
					columns="col-md-4 col-xl-7"
				/>
				{/* <HeroSmall src="/images/home/homeMobile/beautiful-stories.jpg" /> */}
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
						(smScreens && '/images/home/homeMobile/designed-for-everyone.jpg',
						tabletScreens2 &&
							'/images/home/homeTablet/designed-for-everyone.jpg',
						desktopScreens &&
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

			<Card amount={4} />

			<FeaturesCard amount={3} />

			<Footer />
		</main>
	);
};

export default Home;
