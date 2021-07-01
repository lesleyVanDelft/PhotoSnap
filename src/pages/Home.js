import Navbar from '../components/Navbar/Navbar';
import HeroSmall from '../components/HeroSmall/HeroSmall';
import HeroLarge from '../components/HeroLarge/HeroLarge';
import { content } from '../data';
import Arrow from '../components/Arrow';
import ArrowBlack from '../components/ArrowBlack';
import Card from '../components/Card/Card';
import FeaturesCard from '../components/FeaturesCard/FeaturesCard';
import Footer from '../components/Footer/Footer';
import './Home.css';

const Home = () => {
	return (
		<section className="homepage">
			<Navbar />
			<HeroSmall src="/images/home/homeMobile/create-and-share.jpg" />
			<HeroLarge heading={content.content1.title} body={content.content1.body}>
				<a href="/">Get an invite</a>
				<Arrow />
			</HeroLarge>

			<HeroSmall src="/images/home/homeMobile/beautiful-stories.jpg" />
			<HeroLarge
				classColor="white"
				heading={content.content2.title}
				body={content.content2.body}>
				<a href="/">Get an invite</a>
				<ArrowBlack />
			</HeroLarge>

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
		</section>
	);
};

export default Home;
