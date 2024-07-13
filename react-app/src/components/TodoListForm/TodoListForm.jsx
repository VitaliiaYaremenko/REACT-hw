import React, {useEffect, useState} from "react";
import InputForm from "../../UI/FormInput";
import {Grid, Stack} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import {useFormik} from "formik";
import todoListFormValidation from "./todoListFormValidation.js";
import { v4 as uuidv4 } from 'uuid';

const formInitValues = {
    title: '',
    description: '',
};

const TodoListForm = ({onAddTodo, onDeleteAll}) => {
    const [currentId, setCurrentId] = useState(uuidv4())

    useEffect(() => {
        setCurrentId(uuidv4())
    }, [onAddTodo]);


    const formik = useFormik({
        initialValues: {...formInitValues},
        validationSchema: todoListFormValidation,
        onSubmit: (values) => {
            const newTodo = {
                title: values.title.trim(),
                description: values.description.trim(),
                itemId: currentId,
            };

            const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
            const updatedTodos = [...existingTodos, newTodo];
            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            onAddTodo(newTodo);
            formik.resetForm();
        },
    });
const handleDeleteAll = () => {
    localStorage.removeItem('todos');
    onDeleteAll();
}

    const handleReset = () => {
        formik.resetForm();
    };

    return (
        <Grid item xs={8} >
            <Paper elevation={12} sx={{bgcolor:'#e0f2f1', pt:5}}>
                <Box component='form' sx={{p:3}} onSubmit={formik.handleSubmit}>
                    <InputForm
                        id='outlined-basic'
                        type='text'
                        name='title'
                        label="Title:"
                        variant='outlined'
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                    />
                    <FormGroup>
                        <TextField
                            id="description"
                            name='description'
                            label="Enter your description"
                            fullWidth={true}
                            margin='normal'
                            multiline
                            rows={12}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                            />
                    </FormGroup>
                    <Stack direction="row" spacing={2}>
                        <Button type='submit' variant="contained" endIcon={<SendIcon />}>Create</Button>
                        <Button onClick={handleReset} color="info" variant="contained">Clear</Button>
                        <Button onClick={handleDeleteAll} color="error" variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                    </Stack>
                </Box>
            </Paper>
        </Grid>
    )

}

export default TodoListForm;
