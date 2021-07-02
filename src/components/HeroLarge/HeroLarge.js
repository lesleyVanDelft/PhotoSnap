import './HeroLarge.css';
import { Button } from '../Buttons/Button';

const HeroLarge = ({ children, heading, body, classColor, columns }) => {
	return (
		<div className={`heroLarge ${classColor} ${columns}`}>
			<h2 className="heroLarge__heading">{heading}</h2>
			<p className="heroLarge__content">{body}</p>
			{/* <button className={className}>{children}</button> */}
			<Button>{children}</Button>
		</div>
	);
};

export default HeroLarge;
