
import * as Yup from "yup";
//validator npm
import validator from "validator";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const loginValidationSchema = Yup.object({
    username: Yup.string()
        .required('Required'),
    password: Yup.string()
        .max(20, 'Invalid email address')
        .required('Required').matches(passwordRegex, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
})

export const signupValidationSchema = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .max(20, 'Invalid email address')
        .required('Required'),
    acceptedTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions.'),
    jobType: Yup.string()
        .oneOf(
            ['designer', 'development', 'product', 'other'],
            'Invalid Job Type'
        )
        .required('Required'),
})

export const setFieldsOnError = (status, actions) => {

    switch (status) {

        case 404:
            actions.setFieldError("username", "fill out");
            actions.setFieldTouched("username", true, false);
            break;

        default:
            return status;
    }
}

