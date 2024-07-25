import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import {CustomButton} from "../Header/themeConfig.js";
import ImageIcon from '@mui/icons-material/Image';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
// import { ReactComponent as ButtonIcon } from '../../icons/button-icon.svg';

// перенести в головний компонент


const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

const ButtonComponent = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {

    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <CustomButton variant="contained" ref={anchorRef} aria-label="Button group with a nested menu">
                <Button
                    sx={{borderRadius: 0, padding: '5px 16px', borderRight: '1px solid #D4C2FF', fontWeight: 500,}}
                    startIcon={<ImageIcon />}
                    onClick={handleClick}>
                    Capture snapshot
                </Button>
                <Button
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ExpandMoreSharpIcon />
                </Button>
            </CustomButton>
            <Popper
                sx={{zIndex: 1}}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            disabled={index === 2}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}

export default ButtonComponent;

// <Box sx={{paddingLeft: 3, borderLeft: '1px solid #47454A'}}>
//     {!ephemeralEnv && user && (
//         // <img
//         //     onClick={() => {
//         //       navigate("/login");
//         //     }}
//         //     src={user!.photoURL!}
//         //     alt={"avatar"}
//         //     height="32"
//         //     width="32"
//         //     className="avatar circle"
//         // />
//
//         <Avatar alt="Remy Sharp"  src={user!.photoURL!} onClick={() => {
//             navigate("/login");
//         }}/>
//     )}
// </Box>
