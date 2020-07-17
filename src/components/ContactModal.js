import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Fade, Container, Paper, IconButton, Grid, Typography, TextField, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

const styles = makeStyles((theme) => ({
    paper: {
        top: '25%',
        margin: 'auto',
        position: 'absolute',
        width: '100%',
        maxWidth: theme.breakpoints.values['lg'],
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    title: {
        textAlign: 'center'
    },
    form: {
        width: '100%'
    }
}))

const ContactModal = (props) => {
    const classes = styles();
    const texts = { ...props.texts };

    return (
        <Modal
            aria-labelledby="contact-modal-title"
            aria-describedby="contact-modal-description"

            open={props.open}
            onClose={() => props.showModal(false)}
        >
            <Fade in={props.open}>
                <Container maxWidth="lg">
                    <Paper elevation={4} className={classes.paper}>
                        <Grid container spacing={4}>
                            <Grid container item xs={12} justify="flex-end">
                                <IconButton aria-label="cancel" color="secondary">
                                    <CloseIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} >
                                <Typography variant="h4" className={classes.title}>{texts.title}</Typography>
                            </Grid>

                            <Grid
                                component="form"
                                container
                                spacing={4}
                                item xs={12}
                                className={classes.form}
                            >
                                <Grid item md={6}>
                                    <TextField id="nameInput" label="Name" />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField id="emailInput" label="Email" />
                                </Grid>
                                <Grid
                                    container
                                    item xs={12}
                                    spacing={4}
                                    alignItems="center"
                                >
                                    <Grid item md={10}>
                                        <TextField id="messageInput" label="Message" multiline rows={4} />
                                    </Grid>
                                    <Grid item md={2} style={{ textAlign: "center" }}>
                                        <Button
                                            variant="contained"
                                            endIcon={<SendIcon />}

                                        >
                                            {texts.submit}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Fade>
        </Modal>
    )
}

export default ContactModal;