/*Styled components */
import {
	Heading2,
	Heading6,
	Paragraph,
} from '../StyledComponents/StyledComponents.style';
import { HeroLargeContainer, Content } from './HeroLarge.style';

const HeroLarge = ({
	body,
	children,
	classColor,
	columns,
	heading,
	topText,
}) => {
	return (
		<HeroLargeContainer className={`${columns} ${classColor}`}>
			<Content>
				<Heading6>{topText}</Heading6>
				<Heading2>{heading}</Heading2>

				<Paragraph>{body}</Paragraph>
				{children}
			</Content>
		</HeroLargeContainer>
	);
};

export default HeroLarge;
