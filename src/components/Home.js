import React from 'react';
import { Grid, Button, Hidden } from '@material-ui/core';
import { Link as ScrollLink } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomeImage from './theme/HomeImage';
import ParticlesBackground from './theme/ParticlesBackground';
import theme from '../Theme';

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
    mobileMarginTop: {
        [theme.breakpoints.down('md')]: {
            marginTop: '25px',
        },
    }
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
                    <Grid item xs={12} className={classes.mobileMarginTop} >
                        <HomeImage />
                        <Typography variant="h1">{texts.title}</Typography>
                        <Typography variant="h5" component="h2">{texts.subTitle}</Typography>
                    </Grid>
                    <Hidden mdUp>
                        <Grid item xs={12}>
                            <ScrollLink
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <Button variant="contained" color="primary">{texts.aboutButton}</Button>
                            </ScrollLink>
                        </Grid>
                    </Hidden>
                </Grid>
            </div>
            <ParticlesBackground />
        </div>
    )
};

export default Home;