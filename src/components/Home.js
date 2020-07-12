import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ParticlesBackground from './theme/ParticlesBackground';
import HomeImage from './theme/HomeImage';

const styles = makeStyles({
    aboveBackground: {
        width: '100%',
        position: 'fixed',
        zIndex: 11,
    },
    textAlign: {
        textAlign: 'center'
    }
    
});

const Home = (props) => {
    const classes = styles();
    const { title, subTitle } = props.texts;

    return (
        <React.Fragment>
            <div className={classes.aboveBackground}>
                <Container maxWidth="lg">
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        className={classes.textAlign}
                        textAlign="center"
                    >
                        <Grid item xs={12}>
                            <HomeImage />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h1" className={classes.title}>{title}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h2">{subTitle}</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <ParticlesBackground />
        </React.Fragment>
    )
};

export default Home;