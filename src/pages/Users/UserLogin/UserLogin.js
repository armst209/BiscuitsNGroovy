//formik imports
import { Formik, Form } from "formik";

//UI imports
import Input from "../../../UI/Forms/Inputs/Input/Input";

//react imports
import { useState } from "react";

//redux
import { useDispatch } from "react-redux";
import { authenticationActions } from "../../../redux/slices/authentication.slice";

//styles
import styles from "./UserLogin.module.scss"

//validation schema
import { loginValidationSchema, setFieldsOnError } from "../../../UI/Forms/Validation/validationSchema";

//react query
import { useMutation } from "react-query";

//axios
import axios from "axios";
import FormError from "../../../components/Errors/FormErrors/FormError";


const UserLogin = () => {
    const [type, setType] = useState("password");
    const [passwordText, setPasswordText] = useState("Show Password");

    //redux dispatch hook
    const dispatch = useDispatch();

    //show password handler
    const showPasswordHandler = () => {
        passwordText === "Show Password" ? setPasswordText("Hide Password") : setPasswordText("Show Password")
        type === "password" ? setType("text") : setType("password")
    }

    //react query request key
    const LOGIN_KEY = "login-request";

    /**
     * async POST request with axios library
     * @param {*} credentials object that contains username and password strings
     * @returns token from backend
     */
    const loginRequest = async (credentials) => {
        const response = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_BACKEND_URL}/login`,
            data: credentials,
        })
        return response.data.token;
    }

    //react query 
    const { mutate, error } = useMutation(loginRequest, LOGIN_KEY);
    /**
     * setting/removing token in local storage on success/on error
     * setting redux store "authentication" state
     * redirecting to home page on successful request
     * @param {*} eventCredentials object that contains username and password strings
     * @param {*} actions Formik object that provides actions like setSubmitting 
     */
    const handleFormSubmit = (eventCredentials, actions) => {
        const onSuccess = (data) => {
            localStorage.setItem("token", data);
            dispatch(authenticationActions.loggedIn());
            window.location.replace(`${process.env.REACT_APP_FRONTEND_URL}/`);
        }

        const onError = (data) => {
            actions.setSubmitting(false);
            localStorage.removeItem("token");
            dispatch(authenticationActions.loggedOut());
            setFieldsOnError(data.response.status, actions);
        }

        mutate(eventCredentials, { onSuccess, onError })

    }

    return (
        <section className="_main_section">
            <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={loginValidationSchema}
                onSubmit={handleFormSubmit}>
                {({ isSubmitting, isValid }) =>
                    <Form className={styles}>
                        {error && <FormError status={error.response.status} message={error.response.data} />}
                        <Input label="Username" name="username" type="text" placeholder="Enter username" />
                        <button type="button" onClick={showPasswordHandler}>{passwordText}</button>
                        <Input label="Password" name="password" type={type} placeholder="Enter password" />
                        <button type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? "Loading..." : "Submit"}</button>
                    </Form>}
            </Formik>

        </section>
    )
}

export default UserLogin