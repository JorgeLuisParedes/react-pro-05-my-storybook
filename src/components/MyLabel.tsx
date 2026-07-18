import './MyLabel.css';

export interface Props {
	/** Text displayed by the label. */
	label: string;
	/** Visual size of the label. */
	size?: 'normal' | 'h1' | 'h2' | 'h3';
	/** Converts the entire label to uppercase. */
	AllCaps?: boolean;
	/** Predefined color variant. */
	color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
	/** Custom CSS color that overrides the predefined variant. */
	fontColor?: string;
	/** Custom CSS background color. Defaults to transparent. */
	backgroundColor?: string;
}

export const MyLabel = ({
	label,
	size = 'normal',
	AllCaps = false,
	color,
	fontColor,
	backgroundColor = 'transparent',
}: Props) => {
	return (
		<span
			className={`${size} ${color} label`}
			style={{
				color: fontColor,
				backgroundColor,
			}}>
			{AllCaps ? label.toUpperCase() : label}
		</span>
	);
};
