import { useMediaQuery } from 'react-responsive';
import Navbar from '../components/Navbar/Navbar';
import HeroXS from '../components/HeroXS/HeroXS';
import HeroSmall from '../components/HeroSmall/HeroSmall';
import FeaturesCard from '../components/FeaturesCard/FeaturesCard';
import Beta from '../components/Beta/Beta';
import Arrow from '../components/Arrow';
import Footer from '../components/Footer/Footer';
import './Features.css';

const Features = () => {
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
		<main className="features">
			<Navbar />

			<section className="row m-0 p-0 flex-row-reverse">
				<HeroSmall
					src={
						(smScreens && '/images/features/mobile/hero.jpg') ||
						(tabletScreens && '/images/features/tablet/hero.jpg') ||
						(desktopScreens && '/images/features/desktop/hero.jpg')
					}
					columns={'col-md-4 col-xl-7'}
				/>
				<HeroXS
					heading={'features'}
					body={
						'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
					}
					columns={'col-md-8 col-xl-5'}
				/>
			</section>

			<section className="row featuresContainer">
				<FeaturesCard amount={6} columns={'col-md-6 col-xl-4'} />
			</section>
			<div className="section">
				<Beta
					imgsrc={
						(smScreens && '/images/beta/mobile/bg-beta.jpg') ||
						(tabletScreens && '/images/beta/tablet/bg-beta.jpg') ||
						(desktopScreens && '/images/beta/desktop/bg-beta.jpg')
					}>
					<a href="/" className="button">
						Get and invite <Arrow />
					</a>
				</Beta>
			</div>
			<Footer />
		</main>
	);
};

export default Features;
