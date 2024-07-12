import BaseTemplate from "../../templates/BaseTemplate";
import {Container, Grid, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TodoItem from "../../components/TodoItem/TodoItem.jsx";



const MainPage =({}) => {

    return (
        <BaseTemplate>
            <Container maxWidth="xl">
                <Typography variant='h4' component='div' gutterBottom={true}
                    sx={{mb:10, textAlign:'center', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem',}} >
                    Create your Todo List
                </Typography>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={8}>
                            <Paper elevation={12} sx={{bgcolor:'#e0f2f1'}}>
                                <Typography variant='h5' component='div' sx={{fontFamily: 'monospace', textAlign:'center', mb:2, pt:2,}}>
                                     Title
                                </Typography>
                                <Box component='form' sx={{p:3}}>
                                  <TextField
                                      sx={{mb:2, bgcolor:'#fff'}}
                                      fullWidth={true}
                                      name='title'
                                      label='Enter your title'
                                      type='text'
                                  />
                                    <Typography sx={{textAlign:'center', mb:3, fontFamily: 'monospace'}} variant='h6' component='h6' gutterBottom={true}>Description</Typography>
                                    <TextField
                                        sx={{mb:2, bgcolor:'#fff'}}
                                        fullWidth={true}
                                        multiline
                                        rows={12}
                                        id="outlined-multiline-static"
                                        label="Enter your description"
                                        name='description'
                                    />
                                    <Stack direction="row" spacing={2}>
                                        <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
                                        <Button color="error" variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                                    </Stack>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={6}>
                            <TodoItem/>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </BaseTemplate>
    )

}

export default MainPage;

