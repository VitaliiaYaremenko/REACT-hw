import {useFormik} from "formik";
import loginFormValidation from "./loginFormValidation.js";
import InputForm from "../../UI/FormInput/index.js";
import routeNames from "../../routerConfig/routeNames.js";
import Cookies from "cookie-js";


const loginFormInitValues = {
    login: '',
    password: '',
};

const LoginForm = ({onSubmit}) => {
    const {mainPage: mainPage} = routerNames;


    const formik = useFormik({
        initialValues: {...loginFormInitValues},
        validationSchema: loginFormValidation,
        onSubmit: (values, {resetForm}) => {
            Cookies.set('LoggedIn', 'true');
            resetForm();
            navigation(homePage);
        }
    });



    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <InputForm
                    id="login"
                    type='text'
                    name='login'
                    label="Enter your login:"
                    variant='outlined'
                    fullWidth
                    value={formik.values.login.trim()}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.login && Boolean(formik.errors.login)}
                    helperText={formik.touched.login && formik.errors.login}
                />
                <InputForm
                    id="password"
                    type='password'
                    name='password'
                    label="Enter your password:"
                    variant='outlined'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
            </form>
        </>
    )

}

export default LoginForm;
