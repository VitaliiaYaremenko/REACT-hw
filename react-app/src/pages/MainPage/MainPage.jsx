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
import {FormControl, Input} from "@mui/base";
import { Formik, Form, Field } from 'formik';
import TodoListForm from "../../components/TodoListForm";



const MainPage =({}) => {

    return (
        <BaseTemplate textTitle='Creat your Todo List'>
            <Container maxWidth="xl">

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} >
                        <TodoListForm/>

                        <Grid item xs={4}>
                            <TodoItem/>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </BaseTemplate>
    )

}

export default MainPage;

