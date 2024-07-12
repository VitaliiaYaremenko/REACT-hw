import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Paper from "@mui/material/Paper";


const TodoItem = () => {
    return (
        <>
            <Paper elevation={12} sx={{bgcolor: '#e0e0e0'}}>
                <Box sx={{p:3}}>
                    <Typography sx={{textAlign:'center', mb:3, fontFamily: 'monospace'}} variant='h6' component='h6'>
                        Title
                    </Typography>
                    <hr/>

                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" endIcon={<RemoveRedEyeIcon />}>Watch</Button>
                        <Button variant="contained" color="secondary" endIcon={<CreateIcon />}>Fix</Button>
                        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>Delete</Button>
                    </Stack>
                </Box>
            </Paper>
        </>
    )
}

export default TodoItem;
