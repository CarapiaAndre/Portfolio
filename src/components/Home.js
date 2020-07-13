import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ParticlesBackground from './theme/ParticlesBackground';
import HomeImage from './theme/HomeImage';

const styles = makeStyles({
    aboveBackground: {
        marginTop: '24px',
        width: '100%',
        position: 'absolute',
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
        <div className={"main-section"} id="home">
            <div className={classes.aboveBackground}>
                <Container maxWidth="lg">
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        className={classes.textAlign}
                    >
                        <Grid item xs={12}>
                            <HomeImage />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h1">{title}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h2">{subTitle}</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <ParticlesBackground />
        </div>
    )
};

export default Home;