import { Link } from 'react-router-dom';
import { pricing } from '../../../data';
// import PricingButton from '../../Buttons/PricingButton/PricingButton';
import ButtonBlack from '../../Buttons/StyledButtons/ButtonBlack';
import './PriceCard.css';

const PriceCard = ({ color }) => {
	return pricing.map(priceTier => {
		return (
			<article className={`PriceCard col-xl-4`} key={priceTier.id}>
				<h2>{priceTier.title}</h2>
				<p>{priceTier.body}</p>
				<span className="price">{`$${priceTier.price.toFixed(2)}`}</span>
				<ButtonBlack>
					<Link to="#">Pick plan</Link>
				</ButtonBlack>
			</article>
		);
	});
};

export default PriceCard;
