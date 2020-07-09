import React from 'react';
import Typography from '@material-ui/core/Typography';

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/footer')
        
    }, 2000);
    return (
        <div>
            <Typography variant="h1">Contact</Typography>
            <Typography variant="subtitle1">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Typography>
        </div>
    )
};

export default Contact;