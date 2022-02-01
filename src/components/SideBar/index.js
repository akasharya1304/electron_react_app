import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PanToolAltRoundedIcon from '@mui/icons-material/PanToolAltRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    sideBarContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: '0',
        top: '0',
        padding: '2% 1%',
        height: '100%',
        width: '65px',
        backgroundColor: '#022d75',
        zIndex: '100',
        color: '#FFF',
    },
    iconContainer: {
        display: 'flex',
        justifyContent:'space-evenly',
        margin: '20px 0'
       
    },
    icon: {
        color: '#2368E0',
        width: '50px',
        height: '65px',
        transform: 'scale(1.6)', 
    },
    
}));

let SideBar = (props) => {
    const classes = useStyles();

    const [buttons, setButtons] = useState({
        homeButton : true,
        manualButton : false,
        automaticButton : false
    })
    
    function handleHomeButton(event) {
        setButtons(() => {
            return{homeButton : true, manualButton : false, automaticButton : false}
        })
    }
    function handleManualButton(event) {
        setButtons(() => {
            return{homeButton : false, manualButton : true, automaticButton : false}
        })
    }
    function handleAutomaticButton(event) {
        setButtons(() => {
            return{homeButton : false, manualButton : false, automaticButton : true}
        })
    }

    return (
        <Grid container className={classes.sideBarContainer}>
            <Grid item container  className={classes.iconContainer}>
                <IconButton  onClick={handleHomeButton} component={Link} to='/'>
                    <HomeRoundedIcon className={classes.icon} style={{color: (buttons.homeButton) &&'#FFF'}}/>
                </IconButton>    
            </Grid>     
            <Grid item container  className={classes.iconContainer}>
                <IconButton  onClick={handleManualButton} component={Link} to='/manually'>
                    <PanToolAltRoundedIcon className={classes.icon} style={{color: (buttons.manualButton) &&'#FFF'}}/>
                </IconButton>    
            </Grid>     
            <Grid item container  className={classes.iconContainer}>
                <IconButton  onClick={handleAutomaticButton} component={Link} to='/automatically'>
                    <SmartToyRoundedIcon className={classes.icon} style={{color: (buttons.automaticButton) &&'#FFF'}}/>
                </IconButton>    
            </Grid>     
        </Grid>
    )
}

export default SideBar;