import { features } from '../../data';
import './FeaturesCard.css';

const FeaturesCard = props => {
	const featuresHome = features.slice(0, `${props.amount}`);
	return featuresHome.map(feature => {
		return (
			<section className="FeaturesCard" key={feature.id}>
				<div className="FeaturesCard__content">
					<figure className="FeaturesCard__image">
						<img src={feature.src} alt="" />
					</figure>
					<h2>{feature.title}</h2>
					<p>{feature.body}</p>
				</div>
			</section>
		);
	});
};

export default FeaturesCard;