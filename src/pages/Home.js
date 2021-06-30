import Navbar from '../components/Navbar/Navbar';
import HeroSmall from '../components/HeroSmall/HeroSmall';
import HeroLarge from '../components/HeroLarge/HeroLarge';
import content from '../data';
import Arrow from '../components/Arrow';
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
				<Arrow />
			</HeroLarge>
		</section>
	);
};

export default Home;
