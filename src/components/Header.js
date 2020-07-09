import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Grid,
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Menu,
    MenuItem
} from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        };
    }
    handleClick = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        });
    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    }

    render() {
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
                            onClick={this.props.setLanguage}
                            startIcon={<TranslateIcon />}
                            variant="contained"
                            color="primary"
                        >
                            <span>{this.props.texts.language}</span>
                        </Button>
                        <IconButton
                            aria-label="menu"
                            aria-controls="nav-menu"
                            aria-haspopup="true"
                            onClick={this.handleClick}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                        <Menu

                            id="nav-menu"
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}><NavLink to="/">Home</NavLink></MenuItem>
                            <MenuItem onClick={this.handleClose}><NavLink to="/about">About</NavLink></MenuItem>
                            <MenuItem onClick={this.handleClose}><NavLink to="/contact">Contact</NavLink></MenuItem>
                        </Menu>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;