import React, { useState } from 'react';
import {
    Grid,
    AppBar,
    Toolbar,
    Button,
    IconButton,
    SwipeableDrawer,
    useMediaQuery,
    ListItemText
} from '@material-ui/core';
import { Link as ScrollLink } from 'react-scroll';
import TranslateIcon from '@material-ui/icons/Translate';
import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
import theme from '../styles/Theme';

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
                    : <ListItemText style={{ textAlign: 'center' }}>{props.texts.pageList[i]}</ListItemText>
                }
            </ScrollLink>
        </Grid>

    );

    return (
        <AppBar position="sticky" color={state.activePage !== "about" ? "primary" : "secondary"}>
            <Toolbar>
                <Grid container>
                    <Grid item xs={6}>
                        <Button
                            onClick={props.setLanguage}
                            startIcon={<TranslateIcon />}
                        >
                            {props.texts.language}
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        container
                        justify="flex-end"
                        direction={largeDevice? 'row' : 'row-reverse'}
                    >
                        <Grid item>
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
                        <Grid item>
                            <IconButton color="secondary">
                                <EmailIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;