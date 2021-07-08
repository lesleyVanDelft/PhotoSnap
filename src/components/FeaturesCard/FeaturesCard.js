import { features } from '../../data';
import './FeaturesCard.css';

const FeaturesCard = props => {
	const featuresHome = features.slice(0, `${props.amount}`);
	return featuresHome.map(feature => {
		return (
			<article className={`FeaturesCard ${props.columns}`} key={feature.id}>
				<div className="FeaturesCard__content">
					<figure className="FeaturesCard__image">
						<img src={feature.src} alt="" />
					</figure>
					<h2>{feature.title}</h2>
					<p>{feature.body}</p>
				</div>
			</article>
		);
	});
};

export default FeaturesCard;
