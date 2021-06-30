import Navbar from '../components/Navbar/Navbar';
import HeroSmall from '../components/HeroSmall/HeroSmall';
import './Home.css';

const Home = () => {
	return (
		<section className="homepage">
			<Navbar />
			<HeroSmall src="/images/home/homeMobile/create-and-share.jpg" />
		</section>
	);
};

export default Home;
