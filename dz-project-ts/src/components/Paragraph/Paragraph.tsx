import styles from './Paragraph.module.css';
import type { ParagraphProps } from './Paragraph.props';

function Paragraph({ text }: ParagraphProps) {
	return (
		<p className={styles.paragraph}>{text}</p>
	);
}

export default Paragraph;