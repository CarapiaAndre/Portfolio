import React, { useState } from 'react';
import {
    Grid,
    AppBar,
    Toolbar,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    SwipeableDrawer
} from '@material-ui/core';
import { Link } from 'react-scroll';
import TranslateIcon from '@material-ui/icons/Translate';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = (props) => {
    const [state, setState] = useState({
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button key={"home"}>
                    <ListItemText primary={
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={toggleDrawer(anchor, false)}
                        >
                            {props.texts.home}
                        </Link>
                    } />
                </ListItem>
                <ListItem button key={"about"}>
                    <ListItemText primary={
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={toggleDrawer(anchor, false)}
                        >
                            {props.texts.about}
                        </Link>
                    } />
                </ListItem>
                <ListItem button key={"contact"}>
                    <ListItemText primary={
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={toggleDrawer(anchor, false)}
                        >
                            {props.texts.contact}
                        </Link>
                    } />
                </ListItem>

            </List>
        </div>
    );

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Button
                            onClick={props.setLanguage}
                            startIcon={<TranslateIcon />}
                            variant="contained"
                        >
                            <span>{props.texts.language}</span>
                        </Button>
                    </Grid>
                    <Grid item>
                        <IconButton
                            aria-label="menu"
                            aria-controls="nav-menu"
                            aria-haspopup="true"
                            onClick={toggleDrawer('right', true)}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                </Grid>
                <SwipeableDrawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
                >
                    {list('right')}
                </SwipeableDrawer>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;