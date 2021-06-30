import './HeroLarge.css';
import { Button } from '../Buttons/Button';

const HeroLarge = ({ children, heading, body, className }) => {
	return (
		<article className="heroLarge">
			<h2 className="heroLarge__heading">{heading}</h2>
			<p className="heroLarge__content">{body}</p>
			{/* <button className={className}>{children}</button> */}
			<Button className={className}>{children}</Button>
		</article>
	);
};

export default HeroLarge;
