import React from 'react';
import { Grid, Container, IconButton, Button } from "@material-ui/core";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GmailIcon from './theme/GmailIcon';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../styles/Theme';

const styles = makeStyles({
    background: {
        backgroundColor: theme.palette.secondary.dark,
        textAlign: 'center'
    },
    icons: {
        width: '3rem',
        height: '3rem'
    }
})

const Footer = () => {
    const classes = styles();
    return (
        <div className={classes.background}>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={12} >
                        <IconButton aria-label="Expand Less">
                            <ExpandLessIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                    <Grid item xs={2}>
                        <GitHubIcon className={classes.icons} color="primary" />
                    </Grid>
                    <Grid item xs={2}>
                        <LinkedInIcon className={classes.icons} color="primary" />
                    </Grid>
                    <Grid item xs={2}>
                        <GmailIcon className={classes.icons} color="primary" />
                    </Grid>
                    <Grid item xs={12}>
                        <span>ANDRE CARAPIA <span style={{ color: theme.palette.primary.main }}>@2020</span></span>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Footer;