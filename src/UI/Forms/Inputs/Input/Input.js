
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


// import { useField } from "formik";
// import { TextField, TextFieldProps } from "@mui/material"


// type FormikTextFieldProps = {
//     formikKey: string,
// } & TextFieldProps

// export const FormikTextField = ({ formikKey, ...props }: FormikTextFieldProps) => {
//     const [field, meta, helpers] = useField(formikKey);
//     return <TextField
//         id={field.name}
//         name={field.name}
//         helperText={meta.touched ? meta.error : ""}
//         error={meta.touched && Boolean(meta.error)}
//         value={field.value}
//         onChange={field.onChange}
//         {...props}
//     />
// }