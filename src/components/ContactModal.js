import React from 'react';
import { Modal, Fade, Container, IconButton, Grid, Typography, TextField, Button, CircularProgress, makeStyles, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import RefreshIcon from '@material-ui/icons/Refresh';
import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles(theme => ({
    modalContainer: {
        marginTop: '15%',
        backgroundColor: '#fff',
        paddingBottom: theme.spacing(2)
    },
    input: {
        width: '100%',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    buttonWrapper: {
        position: 'relative',
        width: 'fit-content'
    },
    '@global': {
        '.MuiFormLabel-root': {
            color: theme.palette.secondary.main
        },
        '.MuiFormLabel-root.Mui-focused': {
            color: theme.palette.secondary.main
        },
        '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
        }
    },
}))

const ContactModal = (props) => {
    const [nameInvalid, setNameInvalid] = React.useState(false);
    const [emailInvalid, setEmailInvalid] = React.useState(false);
    const [messageInvalid, setMessageInvalid] = React.useState(false);

    const [loading, setLoading] = React.useState(false);
    const [status, setStatus] = React.useState(false);
    const [feedback, setFeedback] = React.useState(false);

    const texts = { ...props.texts };

    const submitButton = () => {
        let icon = <SendIcon />
        let buttonText = texts.submit

        if (status === 'success') {
            icon = <CheckIcon />
            buttonText = texts.success
        }
        if (status === 'error') {
            icon = <RefreshIcon />
            buttonText = texts.error
        }

        return (
            <div className={classes.buttonWrapper}>
                <Button
                    variant="contained"
                    endIcon={icon}
                    type="submit"
                    color="primary"
                    disabled={loading}

                >
                    {buttonText}
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
        )
    }

    const closeModal = () => {
        setFeedback(false);
        setStatus(false);
        props.showModal(false);
    }

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset()
                setStatus('success')
                setLoading(false)
                setFeedback(true)
            } else {
                setStatus('error')
                setLoading(false)
                setFeedback(true)
            }
        };
        xhr.send(data);
    }

    const validate = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.id;

        if (inputName === 'name') setNameInvalid(inputValue.length < 3)
        if (inputName === 'email') setEmailInvalid(inputValue.indexOf('@') === -1 && inputValue.length < 5)
        if (inputName === 'message') setMessageInvalid(inputValue.length < 10)
    }

    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Modal
                aria-labelledby="Send Message"
                aria-describedby="Tell me more about your project"
                open={props.open}
                onClose={() => props.showModal(false)}
                closeAfterTransition
            >
                <Fade in={props.open}>
                    <Container maxWidth="md" className={classes.modalContainer}>
                        <form
                            action="https://formspree.io/xgenpdbw"
                            method="post"
                            onSubmit={(e) => submit(e)}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} container justify="flex-end" >
                                    <IconButton onClick={() => props.showModal(false)}>
                                        <CloseIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: 'center' }}>
                                    <Typography variant="h3">{texts.title}</Typography>
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <TextField
                                        error={nameInvalid}
                                        onChange={(e) => validate(e)}
                                        required
                                        id="name"
                                        label={texts.name}
                                        variant="outlined"
                                        className={classes.input}
                                        helperText={nameInvalid ? texts.nameHelper : null}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <TextField
                                        error={emailInvalid}
                                        onChange={(e) => validate(e)}
                                        required
                                        id="email"
                                        label={texts.email}
                                        variant="outlined"
                                        className={classes.input}
                                        helperText={emailInvalid ? texts.emailHelper : null}
                                    />
                                </Grid>
                                <Grid item xs={12} container alignItems="center">
                                    <Grid item lg={10} xs={12}>
                                        <TextField
                                            onChange={(e) => validate(e)}
                                            id="message"
                                            label={texts.message}
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                            className={classes.input}
                                            error={messageInvalid}
                                            helperText={messageInvalid ? texts.messageHelper : null}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        {submitButton()}
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} />
                            </Grid>
                        </form>
                        <Dialog
                            open={feedback}
                            onClose={() => setFeedback(false)}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{status === "success" ? texts.thanksMessage : "Oops!"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {status === "success" ? texts.successMessage : texts.errorMessage}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={status === "success" ? () => closeModal() : () => setFeedback(false)} color="secondary">
                                    OK
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </Container>
                </Fade>
            </Modal>
        </Container>
    )
};

export default ContactModal;