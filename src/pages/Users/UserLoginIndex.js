
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
import { USER_LOGIN } from "./redux/types";


const UserLogin = () => {
    //redux hooks
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.bng_user.login);

    //react hook forms
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: "onBlur", resolver: yupResolver(loginValidationSchema), defaultValues: { username: "", password: "" } });


    console.log(watch(["username", "password"]));
    console.log(errors);



    return (
        <section id={styles["user-login"]} className="_main_section">
            <form className={styles.form} onSubmit={handleSubmit((credentials) => dispatch(postUserCredentialsThunk(credentials)))}>
                {loginState.error && <div>{loginState.error.data}</div>}
                <input placeholder="Enter Username" {...register("username")} />
                {errors.username && <p>{errors.username.message}</p>}
                <input type="password" placeholder="Enter Password" {...register("password")} />
                {errors.password && <p>{errors.password.message}</p>}
                <button type="submit">{loginState.status === USER_LOGIN.POSTING ? "Loading..." : "Submit"}</button>
            </form>
        </section>
    )
}



export default UserLogin
