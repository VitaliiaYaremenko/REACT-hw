import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {headerTheme, MaterialUISwitch} from './themeConfig.js'
import ButtonComponent from "../ButtonComponent/ButtonComponent.jsx";
import DescriptionIcon from '@mui/icons-material/Description';
import {
    Avatar,
    Container,
    ThemeProvider,
    FormControlLabel,
    FormGroup,
    IconButton
} from '@mui/material';
import AvatarImg from '../../img/avatar.jpg'
import SideMenu from "../SideMenu/SideMenu.jsx";
const Header = ({ label = 'TodoListItem List' }) => {

    return (
        <ThemeProvider theme={headerTheme}>
        <AppBar position="static" style={{zIndex:1 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center'}}>

                        <ButtonComponent/>

                        <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<MaterialUISwitch   />}
                                    label=""
                                />
                            </FormGroup>
                            <IconButton aria-label="delete" sx={{marginRight: '24px'}}>
                                <DescriptionIcon  sx={{color: '#47454A'}} />
                            </IconButton>

                        </Box>

                        <Box sx={{paddingLeft: 3, borderLeft: '1px solid #47454A'}}>
                            <Avatar alt="Remy Sharp" src={AvatarImg} />
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
            <SideMenu/>
        </ThemeProvider>
    );
};

export default Header;
