import { useMediaQuery } from 'react-responsive';
import {
	Container,
	ContainerTop,
	CheckmarkContainer,
	CheckmarkContent,
	TierSpan,
	TierSpanDesktop,
	CheckMark,
} from './Compare.style';
import { Heading2, Heading4 } from '../StyledComponents/StyledComponents.style';

import { CompareFeatures } from '../../data';
import Check from '../../assets/pricing/desktop/check.svg';
import './Compare.css';

const Compare = () => {
	const smScreens = useMediaQuery({
		maxWidth: 768,
	});

	return (
		<div className="CompareContainer">
			{/*Price tiers visible on tablet or higher */}
			{smScreens || (
				<Heading2 black center>
					COMPARE
				</Heading2>
			)}
			<ContainerTop>
				<Heading4>The Features</Heading4>

				{smScreens || (
					<CheckmarkContainer>
						<CheckmarkContent>
							<TierSpanDesktop>Basic</TierSpanDesktop>
						</CheckmarkContent>
						<CheckmarkContent>
							<TierSpanDesktop>Pro</TierSpanDesktop>
						</CheckmarkContent>
						<CheckmarkContent>
							<TierSpanDesktop>Business</TierSpanDesktop>
						</CheckmarkContent>
					</CheckmarkContainer>
				)}
			</ContainerTop>

			{CompareFeatures.map(feature => {
				return (
					<div key={feature.id}>
						<Container>
							<Heading4>{feature.feature}</Heading4>
							<CheckmarkContainer>
								<CheckmarkContent>
									<TierSpan>Basic</TierSpan>
									{feature.basic ? <CheckMark src={Check} /> : undefined}
								</CheckmarkContent>

								<CheckmarkContent>
									<TierSpan>Pro</TierSpan>
									{feature.pro ? <CheckMark src={Check} /> : undefined}
								</CheckmarkContent>

								<CheckmarkContent>
									<TierSpan>Business</TierSpan>
									{feature.business ? <CheckMark src={Check} /> : undefined}
								</CheckmarkContent>
							</CheckmarkContainer>
						</Container>
					</div>
				);
			})}
		</div>
	);
};

export default Compare;
