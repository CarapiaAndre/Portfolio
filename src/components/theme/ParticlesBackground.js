import React from 'react';
import Particles from 'react-tsparticles';
import ParticlesConfig from '../../assets/particlesConfig.json';
import triangleBackground from '../../assets/img/triangles-bg.svg';
import { makeStyles } from '@material-ui/core/styles';

const ParticlesBackground = (props) => {
    const styles = makeStyles({
        bgContainer: {
            position: 'relative',
            height: 'calc(100vh - 100px)',
            maxHeight: 'calc(100vh - 100px)',
            width: '100%'
        },
        background: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: '10',
            backgroundColor: '#ffffff',
            backgroundImage: `url(${triangleBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        aboveBackground: {
            width: '100%',
            position: 'fixed',
            zIndex: 11,
            marginRight: 'auto'
        }
    });
    
    const classes = styles();
    return (
        <div className={classes.bgContainer}>
            <div className={classes.background}>
                <Particles id="tsparticles" params={ParticlesConfig} />
            </div>
            <div className={classes.aboveBackground}>
                {props.children}
            </div>
        </div>
    );
};

export default ParticlesBackground;