import BaseTemplate from "../../templates/BaseTemplate";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import '@fontsource/roboto/500.css';
import {deepPurple} from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import {Container, Stack} from "@mui/material";
import * as React from "react";


const MainPage = () => {

    return (
        <Container maxWidth="xl">
        <BaseTemplate>
            <Typography sx={{textAlign:'center', pt:5}} variant='h4' component='div' gutterBottom={true}>Create Todo List</Typography>
            <Grid container spacing={2} sx={{gap:5, justifyContent: 'center'}}>
                <Grid item xs={6}>
                    <Typography sx={{textAlign:'center', mb:3}} variant='h5' component='div' gutterBottom={true}>Title</Typography>
                    <TextField
                        sx={{mb:2}}
                        name='title'
                        label='Enter your title'
                        type='text'
                        fullWidth={true}
                    />
                    <Typography sx={{textAlign:'center', mb:3}} variant='h5' component='div' gutterBottom={true}>Description</Typography>
                    <TextField
                        multiline
                        rows={12}
                        id="outlined-multiline-static"
                        label="Enter your description"
                        fullWidth={true}
                    />
                </Grid>


                <Grid item xs={4}></Grid>
            </Grid>
        </BaseTemplate>
        </Container>
    );
}


export default MainPage;
