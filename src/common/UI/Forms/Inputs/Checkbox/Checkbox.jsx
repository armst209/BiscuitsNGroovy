//formik imports
import { useField } from "formik";

//styles
import styles from "./Checkbox.module.scss"

const Checkbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className={styles["input-error"]}>{meta.error}</div>
            ) : null}
        </div>
    );
}

export default Checkbox