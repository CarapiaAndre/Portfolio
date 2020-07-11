import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ParticlesBackground from './theme/ParticlesBackground';
import HomeImage from './theme/HomeImage';

const styles = makeStyles({
    gridImage: {
        paddingTop: '5%'
    },
    title: {
        fontSize: '5rem',
        paddingBottom: '1rem'
    }
});

const Home = (props) => {
    const classes = styles();
    const { title, subTitle } = props.texts;
    
    return (
        <ParticlesBackground>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.gridImage}
                >
                    <Grid item>
                        <HomeImage />
                    </Grid>
                    <Grid item>
                        <Typography variant="h1" className={classes.title}>{title}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" color="secondary">{subTitle}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </ParticlesBackground>
    )
};

export default Home;