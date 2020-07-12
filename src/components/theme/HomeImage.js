import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import responsiveDevicesSVG from '../../assets/img/responsiveDevices.svg'

const styles = makeStyles((theme) => ({
    responsiveDevices: {
        width: '477px',
        height: '321px',
        margin: '2em',
        [theme.breakpoints.down('sm')]: {
            width: '205px',
            height: '137px'
        }
    }
}));

const HomeImage = () => {
    const classes = styles();
    return (
        <img className={classes.responsiveDevices} src={responsiveDevicesSVG} alt="Responsive Devices" />
    )
};

export default HomeImage;