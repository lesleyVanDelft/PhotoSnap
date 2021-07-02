import { stories } from '../../data';
import Arrow from '../Arrow';
import './Card.css';

const Card = props => {
	const storiesHome = stories.slice(0, `${props.amount}`);

	return storiesHome.map(story => {
		return (
			<article className="Card col-md-6 col-xl-3" key={story.id}>
				<div className="Card__content ">
					<div className="Card__content-text">
						<h2 className="Card__title">{story.title}</h2>
						<p className="Card__author">by {story.author}</p>
					</div>

					<div className="button">
						<button className="btnTransparentWhite">Read Story</button>
						<Arrow />
					</div>
				</div>

				<figure className="Card__image">
					<img src={story.srcMobile} alt="" />
				</figure>
			</article>
		);
	});
};

export default Card;
