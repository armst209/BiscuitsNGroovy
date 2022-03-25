

//styles
import styles from "./Input.module.scss"

const Input = ({ label, register, required, type, id, name, error, placeholder }) => {


    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input placeholder={placeholder}{...register(label, { required })} />
            {/* <p>{error[name] &&  }</p> */}
        </>
    )
}

export default Input

