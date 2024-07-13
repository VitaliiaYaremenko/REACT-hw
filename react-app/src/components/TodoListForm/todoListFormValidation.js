import * as Yup from 'yup';

const todoListFormValidation = Yup.object({
    title: Yup.string()
        .trim()
        .required('Required'),
    description: Yup.string()
        .trim()
        .required('Required')
})

export default todoListFormValidation;
