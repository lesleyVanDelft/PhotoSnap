import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { CompareFeatures } from '../../data';
import Check from '../../assets/pricing/desktop/check.svg';
import './Compare.css';

const Heading1 = styled.h2`
	font-size: 2.5rem;
	font-weight: bold;
	font-family: 'DM Sans', sans-serif;
	letter-spacing: 0.2606rem;
	text-transform: uppercase;
	line-height: 3rem;
	text-align: center;
`;

const Heading2 = styled.h4`
	font-size: 12px;
	font-weight: bold;
	letter-spacing: 2px;
	font-family: 'DM Sans';
	text-transform: uppercase;
	color: #000;
`;

const Container = styled.div`
	width: 80%;
	margin: 1rem auto;
	/* padding: 0rem 1.8125rem; */
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const ContainerTop = styled(Container)`
	border-bottom: 1px solid #000;
`;

const CheckmarkContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	/* border-bottom: 1px solid #f4f4f4; */
	padding: 1rem 0rem;
	padding-bottom: 1.2rem;
`;

const CheckmarkContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 4.375rem;
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
			{smScreens || <Heading1>COMPARE</Heading1>}
			<ContainerTop>
				<Heading2>The Features</Heading2>
			</ContainerTop>
			{CompareFeatures.map(feature => {
				return (
					<div key={feature.id}>
						<Container>
							<Heading2>{feature.feature}</Heading2>
							<CheckmarkContainer>
								<CheckmarkContent>
									<TierSpan>Basic</TierSpan>
									{feature.basic ? <CheckMark src={Check} /> : null}
								</CheckmarkContent>

								<CheckmarkContent>
									<TierSpan>Pro</TierSpan>
									{feature.pro ? <CheckMark src={Check} /> : null}
								</CheckmarkContent>

								<CheckmarkContent>
									<TierSpan>Business</TierSpan>
									{feature.business ? <CheckMark src={Check} /> : null}
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
