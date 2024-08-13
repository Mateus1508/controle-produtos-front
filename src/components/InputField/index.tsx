import styles from './styles.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string;
}

const InputField = ({ text, ...props }: Props) => {
    return (
        <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{text}</legend>
            <input {...props} className={styles.input} />
        </fieldset>
    );
};

export default InputField;
