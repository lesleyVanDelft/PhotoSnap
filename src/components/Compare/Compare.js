import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { CompareFeatures } from '../../data';
import Check from '../../assets/pricing/desktop/check.svg';
import './Compare.css';

const Heading2 = styled.h2`
	font-size: 2.5rem;
	font-weight: bold;
	font-family: 'DM Sans', sans-serif;
	letter-spacing: 0.2606rem;
	text-transform: uppercase;
	line-height: 3rem;
	text-align: center;
`;

const Heading4 = styled.h4`
	font-size: 12px;
	font-weight: bold;
	letter-spacing: 2px;
	font-family: 'DM Sans';
	text-transform: uppercase;
	color: #000;
	flex: 40%;

	@media screen and (min-width: 768px) {
		/* margin: 0; */
	}
`;

const Container = styled.div`
	width: 80%;
	margin: 1rem auto;
	/* padding: 0rem 1.8125rem; */
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);

	@media screen and (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
`;

const ContainerTop = styled(Container)`
	border-bottom: 1px solid #000;
`;
const ContainerTopDesktop = styled(ContainerTop)`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	margin: 0;
	padding-left: 2.5rem;
	@media screen and (min-width: 768px) {
		border-bottom: none;
	}
`;

// const ContainerDesktop = styled(Container)`
// 	width: 50%;
// 	border-bottom: 0;
// 	justify-content: space-between;
// 	/* margin-right: 8rem; */
// 	justify-self: flex-start;
// `;

const CheckmarkContainer = styled.div`
	width: 100%;
	display: flex;
	padding: 1rem 0rem;
	padding-bottom: 1.2rem;

	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: space-around;
	}
`;

const CheckmarkContent = styled.div`
	display: flex;
	flex-direction: column;
	/* margin-right: 4.375rem; */
	width: 100%;

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
`;

const CheckmarkContentDesktop = styled(CheckmarkContent)`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
`;

const TierSpan = styled.p`
	font-size: 0.625rem;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 0.1044rem;
	font-family: 'DM Sans', sans-serif;
	line-height: auto;
	color: rgba(0, 0, 0, 0.5);
	margin: 0;
	margin-bottom: 0.5rem;

	@media screen and (min-width: 768px) {
		font-size: 0.75rem;
		letter-spacing: 0.125rem;
		display: none;
	}
`;

const TierSpanDesktop = styled(TierSpan)`
	color: #000;
	font-size: 12px;
	margin-right: 20px;
	display: flex;
`;

const CheckMark = styled.img`
	width: 1.2rem;
	height: 1rem;
`;

const Compare = () => {
	// React media queries
	// const tabletScreens = useMediaQuery({
	// 	minWidth: 768,
	// 	maxWidth: 1200,
	// });
	// const desktopScreens = useMediaQuery({
	// 	minWidth: 1200,
	// });
	const smScreens = useMediaQuery({
		maxWidth: 768,
	});

	return (
		<div className="CompareContainer">
			{/*Compare header visible on tablet or higher */}
			{smScreens || <Heading2>COMPARE</Heading2>}
			<ContainerTop>
				<Heading4>The Features</Heading4>
				{/*Price tiers visible on tablet or higher */}
				{smScreens || (
					// <ContainerTopDesktop>
					// 	<CheckmarkContainer>
					// 		<CheckmarkContentDesktop>
					// 			<TierSpanDesktop>Basic</TierSpanDesktop>
					// 			<TierSpanDesktop>Pro</TierSpanDesktop>
					// 			<TierSpanDesktop>Business</TierSpanDesktop>
					// 		</CheckmarkContentDesktop>
					// 	</CheckmarkContainer>
					// </ContainerTopDesktop>
					<ContainerTopDesktop>
						<CheckmarkContainer>
							<CheckmarkContent>
								<TierSpanDesktop>Basic</TierSpanDesktop>
								<TierSpanDesktop>Pro</TierSpanDesktop>
								<TierSpanDesktop>Business</TierSpanDesktop>
							</CheckmarkContent>
						</CheckmarkContainer>
					</ContainerTopDesktop>
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
