//formik imports
import { Formik, Form } from "formik";

//UI imports
import Input from "../../../UI/Forms/Inputs/Input/Input";

//react imports
import { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { authenticationActions } from "../../../redux/slices/authentication.slice";

//styles
import styles from "./UserLogin.module.scss"

//validation schema
import { loginValidationSchema, setFieldsOnError } from "../../../UI/Forms/Validation/validationSchema";


//services
import { loginRequest } from "../../../services/auth.service";

//component imports
import FormError from "../../../components/Errors/FormErrors/FormError";
import ShowPasswordButton from "../../../UI/Forms/ShowPasswordButton/ShowPasswordButton";


const UserLogin = () => {
    //redux dispatch hook
    const dispatch = useDispatch();

    const [type, setType] = useState("password");
    const [passwordText, setPasswordText] = useState("Show Password");
    const [submitError, setSubmitError] = useState(null)


    /**
     * setting/removing token in local storage on success/on error
     * setting redux store "authentication" state
     * redirecting to home page on successful request
     * @param {*} eventCredentials object that contains username and password strings
     * @param {*} actions Formik object that provides actions like setSubmitting 
     */

    const handleFormSubmit = async (credentialsObj, { setSubmitting }) => {

        setSubmitting(true);
        const response = await loginRequest(credentialsObj);

        if (response.statusText === "OK") {
            dispatch(authenticationActions.loginSuccess(response.data));
            setSubmitting(false);
        } else {
            setSubmitError(response);
            dispatch(authenticationActions.loginFailure());
            setSubmitting(false);
        }
    }

    return (
        <section className="_main_section">
            <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={loginValidationSchema}
                onSubmit={handleFormSubmit}>
                {({ isSubmitting, isValid }) =>
                    <Form className={styles}>
                        {submitError && <FormError status={submitError.status} message={submitError.data} />}
                        <Input label="Username" name="username" type="text" placeholder="Enter username" />
                        <ShowPasswordButton inputState={{ type, setType, passwordText, setPasswordText }} />
                        <Input label="Password" name="password" type={type} placeholder="Enter password" />
                        <button type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? "Loading..." : "Submit"}</button>
                    </Form>}
            </Formik>
            {/* <button onClick={() => dispatch(authenticationActions.logout(currentState, { type: LOGOUT, payload: null }))}>Logout</button> */}
        </section>
    )
}

export default UserLogin