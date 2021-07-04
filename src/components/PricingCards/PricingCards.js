import { useState } from 'react';
import './PricingCards.css';

const PricingCards = () => {
	const [checked, setChecked] = useState(false);
	// const [active, setActive] = useState('checkbox__active');

	// const handleCheck = () => {
	//     checked ?
	// }
	// const handleCheck = setChecked(!checked);

	const handleClick = () => {
		setChecked(!checked);
	};

	return (
		<section className="row m-0 p-0 subscriptionToggle">
			<div className="checkbox">
				<span
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
					className={`checkbox__yearly ${
						checked ? 'checkbox__active' : 'checkbox__muted'
					}`}>
					Yearly
				</span>
			</div>
		</section>
	);
};

export default PricingCards;
