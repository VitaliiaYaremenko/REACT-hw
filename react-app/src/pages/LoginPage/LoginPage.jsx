import React from "react";
import LoginForm from "../../components/LoginForm";
import baseLoginStyles from './page.module.scss'
const LoginPage = () => {

    return (
        <div className={baseLoginStyles.loginPageBase} >
            <LoginForm/>
        </div>
    )
}

export default LoginPage;
