import {useFormik} from "formik";
import loginFormValidation from "./loginFormValidation.js";
import InputForm from "../../UI/FormInput/index.js";
import Cookies from "cookie-js";
import {useAuth} from "../AuthProvider/AuthProvider.jsx";
import {useNavigate} from "react-router-dom";


const loginFormInitValues = {
    login: '',
    password: '',
};

const LoginForm = () => {
    const { login } = useAuth();
    const navigate = useNavigate();



    const formik = useFormik({
        initialValues: {...loginFormInitValues},
        validationSchema: loginFormValidation,
        onSubmit: (values, { resetForm }) => {
            Cookies.set('LoggedIn', 'true');
            login("dummyToken");
            resetForm();
            navigate("/home");
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
