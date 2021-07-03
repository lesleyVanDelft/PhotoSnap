import './HeroXS.css';

const HeroXS = ({ heading, body, columns }) => {
	return (
		<div className={`heroXS ${columns}`}>
			<div className="content">
				<h2>{heading}</h2>
				<p>{body}</p>
			</div>
		</div>
	);
};

export default HeroXS;
