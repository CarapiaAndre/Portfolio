import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Particles from 'react-tsparticles';
import ParticlesConfig from '../../assets/particlesConfig.json';
import triangleBackground from '../../assets/img/triangles-bg.svg';
import { makeStyles } from '@material-ui/core/styles';

const ParticlesBackground = (props) => {
    const theme = useTheme();
    const upLgDevice = useMediaQuery(theme.breakpoints.up('lg'));
    const headerHeight = 65;

    const styles = makeStyles({
        bgContainer: {
            position: 'relative',
            height: 'calc(100% - ' + headerHeight + 'px)'
        },
        background: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            maxHeight: '100%',
            width: '100%',
            zIndex: '10',
            backgroundColor: '#ffffff',
            backgroundImage: `url(${triangleBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
    });

    const classes = styles();

    return (
        <div className={classes.bgContainer}>
        {
            upLgDevice ?
                <Particles params={ParticlesConfig} className={classes.background} /> :
                <div className={classes.background}> </div>
        }
        </div>
    );
};

export default ParticlesBackground;