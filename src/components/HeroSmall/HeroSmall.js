import './HeroSmall.css';
import { useMediaQuery } from 'react-responsive';

const HeroSmall = ({ columns, src }) => {
	return (
		<figure className={`heroSmall ${columns}`}>
			<img src={`${src}`} alt="" />
		</figure>
	);
};

export default HeroSmall;
