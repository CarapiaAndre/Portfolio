import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Fab } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import connectorSVG from '../assets/img/connector.svg';
import theme from '../Theme';

const syles = makeStyles({
    contactSection: {
        backgroundColor: theme.palette.secondary.main,
        textAlign: 'center',
        minHeight: '800px'
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    }
})

const Contact = (props) => {
    const classes = syles();
    const texts = { ...props.texts };

    return (
        <div className={classes.contactSection} id="contact">
            <img width="100%" src={connectorSVG} alt="connector" />
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h1" color="textSecondary" >{texts.title}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">{texts.description}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Fab variant="extended" color="primary" onClick={() => props.showModal(true)}>
                        <EmailIcon className={classes.extendedIcon} />
                        {texts.button}
                    </Fab>
                </Grid>
            </Grid>
        </div>
    )
};

export default Contact;