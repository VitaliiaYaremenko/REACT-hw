import React, { useEffect, useState } from "react";
import { Container, Grid, Box, Paper } from "@mui/material";
import BaseTemplate from "../../templates/BaseTemplate";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
import TodoListForm from "../../components/TodoListForm";
import { v4 as uuidv4 } from 'uuid';
import { StorageKey } from "../../utils/const";
import Typography from "@mui/material/Typography";


const MainPage = () => {
    const [todoItems, setTodoItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem(StorageKey);
        if (storedItems) {
            try {
                setTodoItems(JSON.parse(storedItems));
            } catch (error) {
                console.error("Failed to parse Local Storage data:", error);
                setTodoItems([]);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(StorageKey, JSON.stringify(todoItems));
    }, [todoItems]);

    const handleSubmit = (data) => {
        const newTodo = { ...data, id: uuidv4(), status: 'pending' };
        setTodoItems(prevItems => [...prevItems, newTodo]);
    };

    const handleStatusChange = (id, newStatus) => {
        setTodoItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, status: newStatus } : item
            )
        );
    };

    const handleDelete = (id) => {
        setTodoItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const createItems = () => {
        if (!todoItems.length) return <Typography sx={{fontFamily: 'monospace'}} variant='h4' component='h5'>No data</Typography>;
        return todoItems.reduceRight((acc, {id, title, description, status }) => {
            acc.push(
                <TodoListItem
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    status={status}
                    onStatusChange={handleStatusChange}
                    onDelete={handleDelete}
                />
            );
            return acc;
        }, []);
    };

    return (
        <BaseTemplate textTitle='Create your Todo List'>
            <Container maxWidth='xl'>
                <Box sx={{ flexGrow: 1 }}>
                    <Paper elevation={12} sx={{ bgcolor: '#e0f2f1', pt: 5, mb:5 }}>
                        <TodoListForm onSubmit={handleSubmit} />
                    </Paper>
                    <Grid container spacing={2}>
                        {createItems()}
                    </Grid>
                </Box>
            </Container>
        </BaseTemplate>
    );
};

export default MainPage;
