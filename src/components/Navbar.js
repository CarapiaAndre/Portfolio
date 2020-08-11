import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, SwipeableDrawer, ListItemText, makeStyles, Hidden, List, ListItem, useMediaQuery } from '@material-ui/core';
import { Link as ScrollLink } from 'react-scroll';
import TranslateIcon from '@material-ui/icons/Translate';
import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';

const Navbar = (props) => {
    const [state, setState] = useState({
        drawerOpen: false,
        pages: ['home', 'about', 'contact']
    });
    
    const darkMode = props.currentPage === 'home' ? false : true; 
    const primary = props.currentPage === 'home' ? 'primary' : 'secondary';
    const secondary = props.currentPage === 'home' ? 'secondary' : 'primary';

    const useStyles = makeStyles(theme => ({
        grow: {
            flexGrow: 1,
        },
        contactButton: {
            borderRadius: '100px',
            [theme.breakpoints.up('md')]: {
                order: 5,
            },
        },
        navLink: {
            color: darkMode ? theme.palette.primary.main : theme.palette.secondary.main,
            '&:hover': {
                borderBottomStyle: 'solid',
                color: darkMode ? theme.palette.primary.dark : theme.palette.secondary.light,
            },
        },
        activeLink: {
            borderBottomStyle: 'solid',
            color: darkMode ? theme.palette.primary.main : theme.palette.secondary.dark,
        },
        mobileActiveLink: {
            borderBottomStyle: 'solid',
            color: theme.palette.secondary.dark,
        },
        navContainer: {
            marginRight: theme.spacing(4),
        },
        '@global': {
            '.MuiDrawer-paper': {
                height: 'auto',
                background: theme.palette.primary.light,
                borderBottomLeftRadius: '50px',
                paddingBottom: '10px'
            }
        }
    }));
    
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, drawerOpen: open });
    };

    const upMdDevice = useMediaQuery(theme => theme.breakpoints.up('md'));

    const linkItem = (page, i) => (
        <ScrollLink
            to={page}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={() => props.setCurrentPage(page.toLowerCase())}
            activeClass={upMdDevice ? classes.activeLink : classes.mobileActiveLink}
        >
            {props.texts.pageList[i]}
        </ScrollLink>
    );

    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar color={primary}>
                <Toolbar>
                    <Button
                        onClick={props.setLanguage}
                        variant="contained"
                        color={secondary}
                        startIcon={<TranslateIcon />}
                    >
                        {props.texts.language}
                    </Button>
                    <div className={classes.grow} />
                    <Button
                        variant="contained"
                        color={secondary}
                        className={classes.contactButton}
                        onClick={() => props.showModal(true)}
                    >
                        <EmailIcon />
                    </Button>
                    <Hidden smDown>
                        <div className={classes.navContainer}>
                            {state.pages.map((page, i) => (
                                <Button key={page} className={classes.navLink}>{linkItem(page, i)}</Button>
                            ))}
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            aria-label="menu"
                            aria-controls="nav-menu"
                            aria-haspopup="true"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor='right'
                open={state.drawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <List>
                    {state.pages.map((page, i) => (
                        <ListItem key={page}>
                            <ListItemText>{linkItem(page, i)}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
        </React.Fragment>
    )
};

export default Navbar;