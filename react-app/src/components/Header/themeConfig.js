import {createTheme, styled, Switch} from "@mui/material";
import Box from "@mui/material/Box";

export const headerTheme = createTheme({
    palette: {
        primary: {
            main: '#131118',
        },
        secondary: {
            main: '#18161D',
        },
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    padding: '24px 0px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    width: 32,
                    height: 32,
                },
            },
        },
    },
});

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 32,
    height: 19,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        margin: 0,
        padding: 2,
        // transitionDuration: '300ms',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(14px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#8453FF',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8453FF' : '#8453FF',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#ffffff',
        width: 15,
        height: 15,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#47454A',
        borderRadius: 64,
    },
}));

export const CustomButton = styled(Box)({
    backgroundColor: '#8458f5',
    color: '#fff',
    borderRadius: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > .MuiButton-root': {
        textTransform: 'none',
        color: '#fff',
    },
});

