import * as React from "react";import BaseTemplate from "../../templates/BaseTemplate";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import {Container, Stack} from "@mui/material";
import {useFormik} from "formik";
import loginFormValidation from "../../utils/validation/loginFormValidation.js";
import PropTypes from "prop-types";
import '@fontsource/roboto/500.css';
import styles from './style.module.scss';

const formInitialValues = {
    title: '',
    description: '',
}

const MainPage = ({onSubmit, disabled}) => {

    const formik = useFormik({
        initialValues: {...formInitialValues},
        loginFormValidation,
        onSubmit: (values) => {
            if(disabled) return;
            onSubmit({...values}, formik.resetForm)
        },
    });


    return (
        <Container maxWidth="xl">
        <BaseTemplate>
            <Typography sx={{textAlign:'center', pt:5}} variant='h4' component='div' gutterBottom={true}>Create Todo List {user}</Typography>

            <Grid container spacing={2} sx={{gap:5, justifyContent: 'center', mt:5}}>

                <form onSubmit={formik.handleSubmit}>
                    <Grid item xs={6} className={styles.styleBg} sx={{p:2}}>
                        <Typography sx={{textAlign:'center', mb:3}} variant='h5' component='div' gutterBottom={true}>Title</Typography>
                        <TextField
                            sx={{mb:2}}
                            fullWidth={true}
                            name='title'
                            label='Enter your title'
                            type='text'
                            value={formik.values.title}
                            isDisabled={disabled}
                            isReadOnly={isLoading}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <div>{formik.errors.title}</div>
                        ) : null}

                        <Typography sx={{textAlign:'center', mb:3}} variant='h5' component='div' gutterBottom={true}>Description</Typography>
                        <TextField
                            multiline
                            sx={{mb:2}}
                            rows={12}
                            id="outlined-multiline-static"
                            label="Enter your description"
                            name='description'
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            isDisabled={disabled}
                            isReadOnly={isLoading}
                            fullWidth={true}
                        />

                        <Stack direction="row" spacing={2} sx={{mb:2}}>
                            <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
                            <Button color="error" variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                        </Stack>
                    </Grid>
                </form>




                {/*<Grid item xs={4} sx={{p:2}} >*/}
                {/*    <Card  sx={{p:1, background: blue[100], boxShadow: '1px 9px 42px -6px rgba(0,0,0,0.75)'}}>*/}
                {/*        <CardContent>*/}
                {/*            <Typography sx={{ fontSize: 14, textAlign:'center'}} color="text.secondary" gutterBottom>*/}
                {/*                Word of the Day*/}
                {/*            </Typography>*/}
                {/*            <hr/>*/}

                {/*            <CardActions>*/}
                {/*                <Stack direction="row" spacing={2} sx={{mb:2}}>*/}
                {/*                    <Button variant="contained" endIcon={<RemoveRedEyeIcon />}>Watch</Button>*/}
                {/*                    <Button variant="contained" color="secondary" endIcon={<CreateIcon />}>Fix</Button>*/}
                {/*                    <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>Delete</Button>*/}
                {/*                </Stack>*/}
                {/*            </CardActions>*/}
                {/*        </CardContent>*/}
                {/*    </Card>*/}
                {/*</Grid>*/}
            </Grid>
        </BaseTemplate>
        </Container>
    );
}

MainPage.propTypes  = {
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    disabled: PropTypes.bool
}
export default MainPage;
