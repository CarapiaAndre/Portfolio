import React from 'react';
import { Grid, Container, IconButton } from "@material-ui/core";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GmailIcon from './theme/GmailIcon';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../styles/Theme';

const styles = makeStyles({
    footer: {
        backgroundColor: theme.palette.secondary.dark,
        textAlign: 'center'
    }
})

const Footer = () => {
    const classes = styles();
    return (
        <div className={classes.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                    <IconButton aria-label="Expand Less">
                            <ExpandLessIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <GitHubIcon color="primary" />
                    </Grid>
                    <Grid item xs={4}>
                        <LinkedInIcon color="primary" />
                    </Grid>
                    <Grid item xs={4}>
                        <GmailIcon color="primary" />
                    </Grid>
                    <Grid item xs={12}>
                        <span>ANDRE CARAPIA <span style={{color: theme.palette.primary.main}}>@2020</span></span>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Footer;