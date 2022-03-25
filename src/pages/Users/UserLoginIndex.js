
//react hook form
import { useForm } from "react-hook-form"
//thunks
import { postUserCredentialsThunk } from "./redux/thunks";

//redux imports
import { useSelector, useDispatch } from "react-redux";

//styles
import styles from "./UserLogin.module.scss";
import { loginValidationSchema } from "../../UI/Forms/Validation/validationSchema";

const UserLogin = () => {
    //redux hooks
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.login);

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const submitHandler = (credentials) => {
        ;
    }

    console.log(watch(["username", "password"]))

    return (
        <section id={styles["user-login"]} className="_main_section">
            {/* <button onClick={e => dispatch(postUserCredentialsThunk({ username: "testaccount", password: "Test123!" }))}>Dispatch</button>
            <div>{loginState.status}</div>
            {loginState.data && <div>{loginState.data}</div>}
            {loginState.error && <div>{loginState.error.payload.data}</div>} */}


            <form className={styles.form} onSubmit={handleSubmit((credentials) => dispatch(postUserCredentialsThunk(credentials)))}>
                {loginState.error && <div>{loginState.error.payload.data}</div>}
                <input type="text" placeholder="Enter Username" {...register("username", { required: true, onBlur: (e) => loginValidationSchema.username })} />
                {/* {errors.username && } */}
                <input type="password" placeholder="Enter Password" {...register("password", { required: true })} />
                <button type="submit">{loginState.status === "POSTING" ? "Loading..." : "Submit"}</button>
            </form>
        </section>
    )
}



export default UserLogin
