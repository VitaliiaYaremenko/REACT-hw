import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import {Container, Menu} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

const Header = ({label='Todo List'}) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static">
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
                          <Typography variant='h6' component='a'>
                              All Todo
                          </Typography>
                      </Box>

                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                sx={{fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem'}}
                                variant="outlined"
                                color="inherit"
                                startIcon={<LogoutIcon />}
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
