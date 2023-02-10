import { useMediaQuery } from 'react-responsive';
import HeroSmall from '../../components/HeroSmall/HeroSmall';
import HeroXS from '../../components/HeroXS/HeroXS';
import PricingCards from '../../components/PricingCards/PricingToggle/PricingToggle';
import Beta from '../../components/Beta/Beta';
import Arrow from '../../components/Arrow';
import Compare from '../../components/Compare/Compare';
import Footer from '../../components/Footer/Footer';
import { motion } from 'framer-motion';

import './Pricing.css';

const Pricing = () => {
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

	const variants = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				duration: 0.75,
			},
		},
	};

	return (
		<motion.main
			className="pricing"
			variants={variants}
			initial={'hidden'}
			animate={'show'}>
			<section className="row m-0 p-0 flex-row-reverse">
				<HeroSmall
					src={
						(smScreens ? '/images/pricing/mobile/hero.jpg' : undefined) ||
						(tabletScreens ? '/images/pricing/tablet/hero.jpg' : undefined) ||
						(desktopScreens ? '/images/pricing/desktop/hero.jpg' : undefined)
					}
					columns={'col-md-4 col-xl-7'}
				/>
				<HeroXS
					heading={'Pricing'}
					body={
						'Create your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
					}
					columns={'col-md-8 col-xl-5'}
				/>
			</section>

			<section className="row pricingContainer">
				<PricingCards />
			</section>

			<Compare />

			<Beta
				imgsrc={
					(smScreens ? '/images/beta/mobile/bg-beta.jpg' : undefined) ||
					(tabletScreens ? '/images/beta/tablet/bg-beta.jpg' : undefined) ||
					(desktopScreens ? '/images/beta/desktop/bg-beta.jpg' : undefined)
				}>
				<a href="/" className="button">
					Get and invite <Arrow />
				</a>
			</Beta>

			<Footer />
		</motion.main>
	);
};

export default Pricing;
