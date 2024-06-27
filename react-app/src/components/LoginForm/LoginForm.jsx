import * as React from 'react';
import {FormControl, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import { useFormik } from 'formik';
// import Cookies from 'js-cookie';
// import  validationSchema  from '../../utils/validation.js';
import formStyles from './form.module.scss';


const loginFormInitialValue = {
    email: '',
    password: '',
}


const LoginForm = ({label='Login Page'}) => {


    return (
     <div className={formStyles.baseFormStyle}>
           <FormControl>
               {label && <Typography className={formStyles.textCenter}  variant='h2' component='div' gutterBottom={true}>{label}</Typography>}
               <Box component='form'>
                   <TextField
                       sx={{mb:2}}
                       id="outlined-password-email"
                       name='email'
                       label='Enter your email'
                       type='email'
                       autoComplete="current-email"
                       fullWidth={true}
                   />
                   <TextField
                       sx={{mb:5}}
                       id="outlined-password-input"
                       name='password'
                       label='Enter your password'
                       type='password'
                       autoComplete="current-password"
                       fullWidth={true}
                   />
               </Box>
               <Button variant="contained" size="large" >Submit</Button>
           </FormControl>
     </div>
    )
}

export default LoginForm;
