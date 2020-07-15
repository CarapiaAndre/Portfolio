import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ParticlesBackground from './theme/ParticlesBackground';
import HomeImage from './theme/HomeImage';

const styles = makeStyles({
    homeSection: {
        height: 'calc(100vh - 130px)',
    },
    aboveBackground: {
        width: '100%',
        position: 'absolute',
        zIndex: 11,
        textAlign: 'center'
    }
});

const Home = (props) => {
    const classes = styles();
    const texts = { ...props.texts };

    return (
        <div className={classes.homeSection} id="home">
            <div className={classes.aboveBackground}>
                <Grid container
                    alignItems="center"
                    className={classes.homeSection}
                >
                    <Grid item xs={12} >
                        <HomeImage />
                        <Typography variant="h1">{texts.title}</Typography>
                        <Typography variant="h6" component="h2">{texts.subTitle}</Typography>
                    </Grid>
                </Grid>
            </div>
            <ParticlesBackground />
        </div>
    )
};

export default Home;