import styled from 'styled-components';

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

const CheckmarkContainer = styled.div`
	width: 100%;
	display: flex;
	padding: 1rem 0rem;
	padding-bottom: 1.2rem;

	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: sp/ace-between;
	}
`;

const CheckmarkContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: flex-start;

	width: 100%;
	margin: 0;

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		/* text-align: center; */
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
	display: flex;
	width: 100%;
	justify-content: space-around;
	text-align: center;
`;

const CheckMark = styled.img`
	width: 1.2rem;
	height: 1rem;
`;

CheckMark.defaultProps = {
	alt: 'Checkmark icon',
};

export {
	Container,
	ContainerTop,
	CheckmarkContainer,
	CheckmarkContent,
	TierSpan,
	TierSpanDesktop,
	CheckMark,
};
