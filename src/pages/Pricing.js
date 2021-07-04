import { useMediaQuery } from 'react-responsive';
import Navbar from '../components/Navbar/Navbar';
// import HeroLarge from '../components/HeroLarge/HeroLarge';
import HeroSmall from '../components/HeroSmall/HeroSmall';
import HeroXS from '../components/HeroXS/HeroXS';
import PricingCards from '../components/PricingCards/PricingToggle/PricingToggle';
import PriceCard from '../components/PricingCards/PriceCard/PriceCard';

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

	return (
		<main className="pricing">
			<Navbar />
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
		</main>
	);
};

export default Pricing;
