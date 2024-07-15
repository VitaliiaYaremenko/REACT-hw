import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    login: Yup.string()
        .min(4, 'Must be at least 4 characters')
        .matches(/@/, 'You are missing @ ')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .trim()
        .required('Password is required'),
});

export default validationSchema;
