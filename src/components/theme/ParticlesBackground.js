import React from 'react';
import Particles from 'react-tsparticles';
import ParticlesConfig from '../../assets/particlesConfig.json';
import triangleBackground from '../../assets/img/triangles-bg.svg';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    bgContainer: {
        position: 'relative',
        height: '100%'
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

const ParticlesBackground = () => {
    const classes = styles();
    const canvasHeight = window.innerHeight * 0.94;

    return (
        <div className={classes.bgContainer}>
            <div className={classes.background}>
                <Particles params={ParticlesConfig} height={canvasHeight} maxHeight={canvasHeight} />
            </div>
        </div>
    );
};

export default ParticlesBackground;