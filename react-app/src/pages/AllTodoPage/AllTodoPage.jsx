import React, {useEffect, useState} from "react";
import {StorageKey} from "../../utils/const.js";
import BaseTemplate from "../../templates/BaseTemplate";
import Box from "@mui/material/Box";
import { Grid,  Link, MenuItem, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import SelectComponent from "../../UI/SelectComponent";


const AllTodoPage = ({}) => {

    const [todoItems, setTodoItems] = useState([]);
    const navigate = useNavigate();

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

    const handleReturnMainPage = () => {
        navigate('/')
    }




    return (
        <BaseTemplate textTitle='All Todo List' className='all-todo-page'>
            <Box sx={{ flexGrow: 1}}>
                <Paper elevation={12} sx={{ bgcolor: '#e0f2f1', p: 5, mb: 5 }}>
                    <Grid container spacing={2}>
                        {todoItems.length ? todoItems.map(({ id, title, description, status }) => (
                            <Grid item xs={4} key={id}>
                                <Paper elevation={12} sx={{ bgcolor: '#e0e0e0', mb: 5 }}>
                                    <Box sx={{ p: 3 }}>
                                        <Typography sx={{ textAlign: 'center', mb: 1, fontFamily: 'monospace' }} variant='h6' component='h6'>
                                            {title}
                                        </Typography>
                                        <hr />
                                        <Typography sx={{ mb: 2, fontFamily: 'monospace' }} variant='subtitle1' component='p'>
                                            {description}
                                        </Typography>
                                        <SelectComponent
                                            value={status}
                                            label='Status'
                                        >
                                            <MenuItem value='completed'>Completed</MenuItem>
                                            <MenuItem value='not-completed'>Not Completed</MenuItem>
                                            <MenuItem value='pending'>Pending</MenuItem>
                                        </SelectComponent>
                                        <Button variant="contained" color="secondary" endIcon={<RemoveRedEyeIcon />} onClick={() => navigate(`/todos/${id}`)}>
                                            Watch
                                        </Button>
                                    </Box>
                                </Paper>
                            </Grid>
                        )) : <Typography sx={{ fontFamily: 'monospace', textAlign: 'center', width: '100%' }} variant='h6' component='p'>No todos found</Typography>}
                    </Grid>
                    <Button variant="contained" disableElevation endIcon={<ExitToAppIcon />} onClick={handleReturnMainPage}>
                        Go Back
                    </Button>
                </Paper>
            </Box>
        </BaseTemplate>
    )

}

export default AllTodoPage;
