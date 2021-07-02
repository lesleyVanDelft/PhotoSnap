import './HeroLarge.css';
import { Button } from '../Buttons/Button';

const HeroLarge = ({ children, heading, body, classColor, columns }) => {
	return (
		<div className={`heroLarge ${classColor} ${columns}`}>
			<div className="content">
				<h2 className="heroLarge__heading">{heading}</h2>
				<p className="heroLarge__content">{body}</p>
				<Button>{children}</Button>
			</div>
		</div>
	);
};

export default HeroLarge;
