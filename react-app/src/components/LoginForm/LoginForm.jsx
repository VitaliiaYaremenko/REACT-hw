import * as React from 'react';
import {FormControl, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginFormValidation from "../../utils/validation/loginFormValidation.js";
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import loginFormStyles from './form.module.scss';



const loginFormInitialValue = {
    email: '',
    password: '',
}


const LoginForm = ({label='Login Page', onLogin}) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onLogin({ email, password })
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };




    return (
     <div className={loginFormStyles.baseFormStyle}>

           <FormControl>
               {label && <Typography className={loginFormStyles.textCenter}  variant='h2' component='div' gutterBottom={true}>{label}</Typography>}
               <Box component='form' onSubmit={handleSubmit}>
                   <TextField sx={{mb:2}}
                       id="outlined-password-email"
                       name='email'
                       value={email}
                       label='Enter your email'
                       type='email'
                       autoComplete="current-email"
                       fullWidth={true}
                       onChange={handleEmailChange}

                   />
                   <TextField sx={{mb:5}}
                       id="outlined-password-input"
                       name='password'
                       value={password}
                       label='Enter your password'
                       type='password'
                       autoComplete="current-password"
                       fullWidth={true}
                       onChange={handlePasswordChange}
                   />
               </Box>
               <Button type='submit' variant="contained" size="large" >Submit</Button>
           </FormControl>
     </div>
    )
}

export default LoginForm;
