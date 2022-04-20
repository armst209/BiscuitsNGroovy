
//component imports
import Button from "../../Button/Button"


const ShowPasswordButton = ({ inputState }) => {

    const { passwordText, setPasswordText, type, setType } = inputState;

    const showPasswordHandler = () => {
        passwordText === "Show Password" ? setPasswordText("Hide Password") : setPasswordText("Show Password")
        type === "password" ? setType("text") : setType("password")
    }

    return (
        <Button type="button" onClick={showPasswordHandler} >{passwordText}</Button>
    )
}

export default ShowPasswordButton