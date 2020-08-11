import React from 'react';
import { Grid, Button, Hidden } from '@material-ui/core';
import { Link as ScrollLink } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomeImage from './theme/HomeImage';
import ParticlesBackground from './theme/ParticlesBackground';

const useStyles = makeStyles({
    homeSection: {
        height: '94vh',
    },
    aboveBackground: {
        width: '100%',
        position: 'absolute',
        zIndex: 11,
        textAlign: 'center',
    },
});


const Home = (props) => {
    const classes = useStyles();
    const texts = { ...props.texts };

    return (
        <div className={classes.homeSection} id="home">
            <div className={classes.aboveBackground}>
                <Grid container
                    alignItems="center"
                    className={classes.homeSection}
                >
                    <Grid item xs={12}  >
                        <HomeImage />
                        <Typography variant="h1">{texts.title}</Typography>
                        <Typography variant="h5" component="h2">{texts.subTitle}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ScrollLink
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <Hidden mdUp>
                                <Button variant="contained" color="primary">{texts.aboutButton}</Button>
                            </Hidden>
                        </ScrollLink>
                    </Grid>
                </Grid>
            </div>
            <ParticlesBackground />
        </div>
    )
};

export default Home;