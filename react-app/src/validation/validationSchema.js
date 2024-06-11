import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required')
});

export default validationSchema;
