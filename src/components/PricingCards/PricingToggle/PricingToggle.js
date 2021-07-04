import { useState } from 'react';
import PricingButton from '../../Buttons/PricingButton/PricingButton';
import { Link } from 'react-router-dom';
import { pricing } from '../../../data';
import './PricingToggle.css';

const PricingCards = () => {
	const [checked, setChecked] = useState(false);
	const handleClick = () => {
		setChecked(!checked);
	};

	return (
		<>
			<section className="row p-0 pricingToggle">
				<div className="checkbox">
					<span
						id="checkboxMonthly"
						className={`checkbox__monthly ${
							checked ? 'checkbox__muted' : 'checkbox__active'
						}`}>
						Monthly
					</span>
					{/* checkbox toggle */}
					<label className="switch" onChange={handleClick}>
						<input type="checkbox" className="checkboxToggle" />
						<span className="slider round"></span>
					</label>
					<span
						id="checkboxYearly"
						className={`checkbox__yearly ${
							checked ? 'checkbox__active' : 'checkbox__muted'
						}`}>
						Yearly
					</span>
				</div>
			</section>

			{pricing.map(priceTier => {
				return (
					<article className={`PriceCard col-xl-4`} key={priceTier.id}>
						<h2>{priceTier.title}</h2>
						<p>{priceTier.body}</p>
						<span className="price">
							{checked
								? `$${parseFloat(priceTier.price).toFixed(2) * 10}.00`
								: `$${priceTier.price.toFixed(2)}`}
						</span>
						<PricingButton>
							<Link to="#">Pick plan</Link>
						</PricingButton>
					</article>
				);
			})}
		</>
	);
};

export default PricingCards;
