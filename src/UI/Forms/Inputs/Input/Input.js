
//formik imports
import { useField } from "formik";

//styles
import styles from "./Input.module.scss"

const Input = ({ label, ...props }) => {

    const [field, meta] = useField(props);


    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className={meta.touched && meta.error ? styles["input-error"] : styles["email-input"]} {...field} {...props} />
            {meta.touched && meta.error ? <div className={styles.error}>{meta.error}</div> : null}
        </>
    )
}

export default Input