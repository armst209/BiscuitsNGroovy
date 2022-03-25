
//react hook form
import { useForm } from "react-hook-form";

//thunks
import { postUserCredentialsThunk } from "./redux/thunks";

//redux imports
import { useSelector, useDispatch } from "react-redux";

//yup validation
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from "../../UI/Forms/Validation/validationSchema";

//styles
import styles from "./UserLogin.module.scss";


const UserLogin = () => {
    //redux hooks
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.login);

    //react hook forms
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: "onBlur", resolver: yupResolver(loginValidationSchema), defaultValues: { username: "", password: "" } });


    console.log(watch(["username", "password"]));
    console.log(errors);

    return (
        <section id={styles["user-login"]} className="_main_section">
            <form className={styles.form} onSubmit={handleSubmit((credentials) => dispatch(postUserCredentialsThunk(credentials)))}>
                {loginState.error && <div>{loginState.error.payload.data}</div>}
                <input placeholder="Enter Username" {...register("username")} />
                {/* {errors.username && errors.username.type === "required" && <span>Required</span>}
                {errors.username && errors.username.type === "minLength" && <span>Please fill out</span>} */}
                <input type="password" placeholder="Enter Password" {...register("password")} />
                <button type="submit">{loginState.status === "POSTING" ? "Loading..." : "Submit"}</button>
            </form>
        </section>
    )
}



export default UserLogin
