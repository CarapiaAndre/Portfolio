import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';
import { Modal, Fade, Container, Paper, IconButton, Grid, Typography, TextField, Button, Backdrop, CircularProgress } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const styles = theme => ({
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
    },
    backdrop: {
        zIndex: theme.zIndex.modal + 1,
    },
    backdropPaper: {
        backgroundColor: theme.palette.secondary.main,
        color: '#fff',
        width: 'auto',
        maxWidth: '700px',
        wordBreak: 'break-word'
    },
    alert: {
        width: 'auto'
    }
});

class ContactModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: this.props.classes,
            texts: { ...props.texts },
            name: '',
            nameError: '',
            email: '',
            emailError: '',
            message: '',
            messageError: '',
            form: {
                submitFeedback: false,
                submitFinished: false,
                xhrStatus: false,
                userMessage: false
            }
        }
    }

    handleChange(input) {
        this.setState(input)
    }

    validate = () => {
        let isError = false;
        const errors = {
            name: '',
            nameError: '',
            email: '',
            emailError: '',
            message: '',
            messageError: '',
        };

        if (this.state.name.length < 1) {
            isError = true;
            errors.nameError = 'Please tell me your name'
        }

        if (this.state.email.indexOf('@') === -1) {
            isError = true;
            errors.emailError = 'Requires valid email'
        }

        if (this.state.message.length < 1) {
            isError = true;
            errors.messageError = 'Tell me a little more about'
        }


        this.setState({
            ...this.state,
            ...errors
        })


        return isError;
    }

    formSubmit = (e) => {
        e.preventDefault();

        const err = this.validate();

        if (!err) {
            const form = e.target;
            const data = new FormData(form);
            const xhr = new XMLHttpRequest();

            xhr.open(form.method, form.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                this.setState(prevState => ({
                    ...prevState,
                    form: {
                        xhrStatus: xhr.status,
                        submitFinished: true,
                        userMessage: data.get('message')
                    }
                }))
                form.reset();
            };
            xhr.send(data);
        }
    }

    copyButton = (type) => {
        const text = document.createElement('textarea');
        document.body.appendChild(text);
        text.value = type === "email" ? "carapia111.andre.en@gmail.com" : this.state.form.userMessage;
        text.select();
        document.execCommand('copy');
        document.body.removeChild(text);
    }

    SubmitResponse = () => {
        let alertEl;

        if (this.state.form.xhrStatus === 200) {
            alertEl = <Alert className={this.state.classes.alert} severity="success">Message sent! Thank's for your time! I'll get back to you as soon as possible.</Alert>;
        } else {
            alertEl =
                <Paper className={this.state.classes.backdropPaper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Alert
                                severity="error"
                                variant="filled"
                                onClose={() => { this.setState({ form: { submitFeedback: false } }) }}
                            >
                                Oops! Something went wrong. Could you send me your message by email?
                            </Alert>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={8}>
                                <span>Email: carapia.andre.en@gmail.com</span>
                            </Grid>
                            <Grid item xs={4}>
                                <Button startIcon={<FileCopyIcon />} onClick={() => this.copyButton("email")}>Copy Email</Button>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid container item xs={8}>
                                <Grid item xs={12}>
                                    <span>Do you want to copy the message you already wrote?</span>
                                </Grid>
                                <Grid item xs={12}>
                                    <span>{this.state.userMessage}</span>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Button startIcon={<FileCopyIcon />} onClick={() => this.copyButton("message")} >Copy Message</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
        }

        return alertEl;
    }

    render() {
        return (
            <Modal
                aria-labelledby="contact-modal-title"
                aria-describedby="contact-modal-description"

                open={this.props.open}
                onClose={() => this.props.showModal(false)}
            >
                <Fade in={this.props.open}>
                    <Container maxWidth="lg">
                        <Paper elevation={4} className={this.state.classes.paper}>
                            <Grid container spacing={4}>
                                <Grid container item xs={12} justify="flex-end">
                                    <IconButton aria-label="cancel" color="secondary" onClick={() => this.props.showModal(false)}>
                                        <CloseIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography variant="h4" className={this.state.classes.title}>{this.state.texts.title}</Typography>
                                </Grid>
                                <form
                                    action="https://formspree.io/xgenpdbw"
                                    method="post"
                                    onSubmit={(e) => { this.formSubmit(e) }}
                                >
                                    <Grid
                                        container
                                        spacing={4}
                                        item xs={12}
                                        className={this.state.classes.form}
                                    >
                                        <Grid item md={6}>
                                            <TextField
                                                id="nameInput"
                                                type="text"
                                                name="name"
                                                label={this.state.texts.name}
                                                value={this.state.name}
                                                onChange={(e) => this.handleChange({ [e.target.name]: e.target.value })}
                                                helperText={this.state.nameError}
                                                error={this.state.nameError.length > 0 ? true : false}
                                            />
                                        </Grid>
                                        <Grid item md={6}>
                                            <TextField
                                                id="emailInput"
                                                type="email"
                                                name="email"
                                                label={this.state.texts.email}
                                                value={this.state.email}
                                                onChange={(e) => this.handleChange({ [e.target.name]: e.target.value })}
                                                helperText={this.state.emailError}
                                                error={this.state.emailError.length > 0 ? true : false}
                                            />
                                        </Grid>
                                        <Grid
                                            container
                                            item xs={12}
                                            spacing={4}
                                            alignItems="center"
                                        >
                                            <Grid item md={10}>
                                                <TextField
                                                    id="messageInput"
                                                    type="text"
                                                    name="message"
                                                    label={this.state.texts.message}
                                                    multiline
                                                    rows={4}
                                                    value={this.state.message}
                                                    onChange={(e) => this.handleChange({ [e.target.name]: e.target.value })}
                                                    helperText={this.state.messageError}
                                                    error={this.state.messageError.length > 0 ? true : false}
                                                />
                                            </Grid>
                                            <Grid item md={2} style={{ textAlign: "center" }}>
                                                <Button
                                                    variant="contained"
                                                    endIcon={<SendIcon />}
                                                    type="submit"
                                                >
                                                    {this.state.texts.submit}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </form>

                            </Grid>
                        </Paper>
                        <Backdrop
                            open={this.state.form.submitFeedback}
                            className={this.state.classes.backdrop}
                        >
                            {
                                this.state.form.submitFinished ?
                                    <this.SubmitResponse /> :
                                    <CircularProgress />
                            }
                        </Backdrop>
                    </Container>
                </Fade>
            </Modal>
        )
    }
};

ContactModal.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactModal);