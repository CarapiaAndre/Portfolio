import React, { useState } from 'react';
import {
    Grid,
    AppBar,
    Toolbar,
    Button,
    IconButton,
    SwipeableDrawer,
    useMediaQuery
} from '@material-ui/core';
import { Link as ScrollLink } from 'react-scroll';
import TranslateIcon from '@material-ui/icons/Translate';
import MenuIcon from '@material-ui/icons/Menu';
import theme from '../styles/Theme';
import MobileListButton from './theme/MobileListButton';

const Navbar = (props) => {
    const [state, setState] = useState({
        drawerOpen: false,
        activePage: 'home',
        pages: ['home', 'about', 'contact']
    });
    const largeDevice = useMediaQuery(theme.breakpoints.up('md'));

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, drawerOpen: open });
    };

    const setActivePage = (page = state.activePage) => {
        setState({ ...state, activePage: page })
    }

    const navList = () => state.pages.map((page, i) =>
        <Grid item key={page}>
            <ScrollLink
                to={page}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActivePage(page.toLowerCase())}
            >
                {largeDevice
                    ? <Button variant={state.activePage === page ? "contained" : "text"}>{props.texts.pageList[i]}</Button>
                    : <MobileListButton >{props.texts.pageList[i]}</MobileListButton>
                }
            </ScrollLink>
        </Grid>

    );

    return (
        <AppBar position="sticky" color={state.activePage !== "about" ? "primary" : "secondary"}>
            <Toolbar>
                <Grid
                    container
                    alignItems="center"
                >
                    <Grid item xs={6}>
                        <Button
                            onClick={props.setLanguage}
                            startIcon={<TranslateIcon />}
                        >
                            <span>{props.texts.language}</span>
                        </Button>
                    </Grid>
                    <Grid item xs={6} container justify="flex-end">
                        {
                            largeDevice ?
                                navList() :
                                <React.Fragment>
                                    <IconButton
                                        aria-label="menu"
                                        aria-controls="nav-menu"
                                        aria-haspopup="true"
                                        onClick={toggleDrawer(true)}
                                    >
                                        <MenuIcon color="secondary" fontSize="large" />
                                    </IconButton>
                                    <SwipeableDrawer
                                        anchor={'right'}
                                        open={state.drawerOpen}
                                        onClose={toggleDrawer(false)}
                                        onOpen={toggleDrawer(true)}
                                    >
                                        {navList()}
                                    </SwipeableDrawer>
                                </React.Fragment>
                        }
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;