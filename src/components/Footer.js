import React from 'react';
import { Grid, Container, IconButton, Link, Snackbar, Slide, Button, Chip, Tooltip } from "@material-ui/core";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GmailIcon from './theme/GmailIcon';
import CloseIcon from '@material-ui/icons/Close';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Link as LinkScroll } from 'react-scroll';
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
    },
    noPadding: {
        padding: '0'
    }
})

const Footer = (props) => {
    const classes = styles();
    const [snackBarOpen, setSnackBarOpen] = React.useState(false);

    const snackBarClick = (open) => () => {
        if (open) {
            const email = document.createElement('textarea');
            document.body.appendChild(email);
            email.value = "carapia.andre.en@gmail.com";
            email.select();
            document.execCommand('copy');
            document.body.removeChild(email);
        }
        setSnackBarOpen(open);
    }

    return (
        <div className={classes.background}>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={12} >
                        <LinkScroll
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-65}
                            duration={500}
                        >
                            <IconButton aria-label="Expand Less">
                                <ExpandLessIcon fontSize="large" />
                            </IconButton>
                        </LinkScroll>
                    </Grid>
                    <Grid item xs={2}>
                        <Link
                            rel="noopener noreferrer"
                            href="https://github.com/CarapiaAndre"
                            target="_blank"
                            component="a"
                        >
                            <GitHubIcon className={classes.icons} color="primary" />
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                            <Link
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/andrecarapia/"
                                target="_blank"
                                component="a"
                            >
                                <LinkedInIcon className={classes.icons} color="primary" />
                            </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Tooltip title="Click to copy: carapia.andre.en@gmail.com" aria-label="copy gmail">
                            <IconButton aria-label="GMail" onClick={snackBarClick(true)} className={classes.noPadding}>
                                <GmailIcon className={classes.icons} color="primary" />
                            </IconButton>
                        </Tooltip>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            open={snackBarOpen}
                            autoHideDuration={6000}
                            onClose={snackBarClick(false)}
                            action={
                                <React.Fragment>
                                    <Chip
                                        variant="outlined"
                                        size="small"
                                        label="Copied"
                                        icon={<FileCopyIcon />}
                                    />
                                    <span>carapia.andre.en@gmail.com</span>
                                    <IconButton aria-label="close" onClick={snackBarClick(false)}>
                                        <CloseIcon />
                                    </IconButton>
                                </React.Fragment>
                            }
                        />
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