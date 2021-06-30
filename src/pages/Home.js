import Navbar from '../components/Navbar/Navbar';
import HeroSmall from '../components/HeroSmall/HeroSmall';
import HeroLarge from '../components/HeroLarge/HeroLarge';
import content1 from '../data';
import { Button } from '../components/Buttons/Button';
import Arrow from '../components/Arrow';
import './Home.css';

const Home = () => {
	return (
		<section className="homepage">
			<Navbar />
			<HeroSmall src="/images/home/homeMobile/create-and-share.jpg" />
			<HeroLarge heading={content1.title} body={content1.body}>
				<a href="/">Get an invite</a>
				<Arrow />
			</HeroLarge>
		</section>
	);
};

export default Home;
