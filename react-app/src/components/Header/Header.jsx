import {AppBar, IconButton, Toolbar, Box, Container} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import {grey} from '@mui/material/colors';


const Header = ({label}) => {
    const headerBgGray = grey[900] // спроба замінити фон хедеру

    return (
        <Box sx={{ flexGrow: 1 }}  >
            <AppBar position="static" >
                <Container maxWidth="xl">
                <Toolbar>
                    <IconButton color="inherit"  aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    {label && <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{label}</Typography>}
                    <Button variant="outlined" color="inherit">Log out</Button>
                </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

Header.propTypes = {
    label: PropTypes.string,
}

export default Header;
