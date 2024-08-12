import styles from './styles.module.css';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    text: string;
}

const TextAreaField = ({ text, ...props }: Props) => {
    return (
        <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{text}</legend>
            <textarea
                {...props}
                className={styles.textarea}
                rows={5}
                wrap="hard"
                cols={30}
                maxLength={500}
            />
        </fieldset>
    );
};

export default TextAreaField;
