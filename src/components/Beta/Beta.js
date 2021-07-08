import './Beta.css';
import Arrow from '../Arrow';
import ButtonLink from '../Buttons/StyledButtons/ButtonLink';

const Beta = ({ imgsrc, children }) => {
	return (
		<section className="Beta">
			<figure className="Beta__image">
				<img src={imgsrc} alt="" />
			</figure>
			<div className="Beta__content">
				<h2>We’re in beta. Get your invite today!</h2>
				<ButtonLink>
					Get an invite <Arrow />
				</ButtonLink>
			</div>
		</section>
	);
};

export default Beta;
