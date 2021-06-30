import './Button.css';

const STYLES = ['btnTransparentWhite', 'btnTransparentBlack'];
const SIZES = ['btn-medium', 'btn-large'];

export const Button = ({ buttonStyle, buttonSize, children, onClick }) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<button
			className={`${checkButtonStyle} ${checkButtonSize}`}
			onClick={onClick}>
			{children}
		</button>
	);
};
