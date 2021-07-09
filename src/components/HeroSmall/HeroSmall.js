import './HeroSmall.css';

const HeroSmall = ({ columns, src }) => {
	return (
		<figure className={`heroSmall ${columns}`}>
			<img src={`${src}`} alt="" />
		</figure>
	);
};

export default HeroSmall;
