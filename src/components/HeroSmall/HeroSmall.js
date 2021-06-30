import './HeroSmall.css';

const HeroSmall = props => {
	return (
		<figure className="heroSmall">
			<img src={`${props.src}`} alt="" />
		</figure>
	);
};

export default HeroSmall;
