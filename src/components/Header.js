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
import TranslateIcon from '@material-ui/icons/Translate';
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {
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
                {['Home', 'About', 'Contact'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <AppBar
            position="static"
            color="transparent"
        >
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >

                    <Button
                        onClick={props.setLanguage}
                        startIcon={<TranslateIcon />}
                        variant="contained"
                        color="primary"
                    >
                        <span>{props.texts.language}</span>
                    </Button>
                    <IconButton
                        aria-label="menu"
                        aria-controls="nav-menu"
                        aria-haspopup="true"
                        onClick={toggleDrawer('right', true)}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={'right'}
                        open={state['right']}
                        onClose={toggleDrawer('right', false)}
                        onOpen={toggleDrawer('right', true)}
                    >
                        {list('right')}
                    </SwipeableDrawer>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;