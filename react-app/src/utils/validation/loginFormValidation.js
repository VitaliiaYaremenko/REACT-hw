import * as Yup from 'yup';

const loginFormValidation = Yup.object({
    login: Yup.string()
        .min(5, 'Must be at least 5 characters')
        .trim()
        .matches(/@/, 'You are missing @ ')
        .required('Required'),
    password: Yup.string()
        .min(4, 'Must be at least 4 characters')
        .trim()
        .required('Required')
})

export default loginFormValidation;
