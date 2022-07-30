
import styles from "./FormErrors.module.scss";

const FormError = ({ status, message }) => {
    return (
        <div id={styles["form-errors"]}>
            <h1>{status}</h1>
            <p>{message}</p>
        </div>
    )
}

export default FormError