import './HeroLarge.css';

const HeroLarge = ({
	children,
	heading,
	body,
	classColor,
	columns,
	topText,
}) => {
	return (
		<div className={`heroLarge ${classColor} ${columns}`}>
			<div className="content">
				<h6 className="heroLarge__topText">{topText}</h6>
				<h2 className="heroLarge__heading">{heading}</h2>

				<p className="heroLarge__content">{body}</p>
				{children}
			</div>
		</div>
	);
};

export default HeroLarge;
