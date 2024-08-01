import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link, useNavigate} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useAuth} from "../AuthProvider/AuthProvider.jsx";


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

const Header = ({label='TodoListItem List'}) => {

    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        console.log("User signed out");
        logout();
        navigate("/login");
    }


    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            sx={{fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem',}}
                            noWrap
                            variant="h6"
                            component="a"
                        >
                            {label}
                        </Typography>

                      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                          <Button
                              variant="outlined"
                              component={Link} to="/todosView"
                              sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'white' }}>
                              All Todo
                          </Button>
                      </Box>

                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                sx={{fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem'}}
                                variant="outlined"
                                color="inherit"
                                startIcon={<LogoutIcon />}
                                onClick={handleLogout}
                             >
                                Logout
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;
