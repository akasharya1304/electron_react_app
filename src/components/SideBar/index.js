import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutofpsSelectIcon from '@mui/icons-material/AutofpsSelect';
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import { IconButton, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    sideBarContainer: {
        display: 'flex',
        displayPrint: 'none',
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
        displayPrint: 'none',
        justifyContent:'space-evenly',
        margin: '20px 0'
       
    },
    tooltip: {
        fontSize: '16px',
        fontWeight: '600'
    },
    
    icon: {
        display: 'flex',
        displayPrint: 'none',
        color: '#2368E0',
        width: '50px',
        height: '65px',
        transform: 'scale(1.6)', 
    },
    
}));

let SideBar = (props) => {
    const classes = useStyles();

    let buttonClicked = props.buttonClickedName

    useEffect(() => {
        (buttonClicked !== 'Home') ? ((buttonClicked === 'handleJdPrintButton()') ? handleJdPrintButton() : handleArtworkMakerButton()) : handleHomeButton() ;
    }, [buttonClicked])

    const [buttons, setButtons] = useState({
        homeButton : true,
        jdPrintButton : false,
        artworkMakerButton : false,
        pratibhaArtwork: false,
        printPratibhaButton: false
    })
    
    function handleHomeButton(event) {
        setButtons(() => {
            return{homeButton : true, jdPrintButton : false, artworkMakerButton : false , pratibhaArtwork: false, printPratibhaButton: false}
        })
    }
    function handleJdPrintButton(event) {
        setButtons(() => {
            return{homeButton : false, jdPrintButton : true, artworkMakerButton : false, pratibhaArtwork: false, printPratibhaButton: false}
        })
    }
    function handleArtworkMakerButton(event) {
        setButtons(() => {
            return{homeButton : false, jdPrintButton : false, artworkMakerButton : true, pratibhaArtwork: false, printPratibhaButton: false}
        })
    }
    function handlePratibhaArtworkButton(event) {
        setButtons(() => {
            return{homeButton : false, jdPrintButton : false, artworkMakerButton : false, pratibhaArtwork: true, printPratibhaButton: false}
        })
    }
    function handlePrintPratibhaArtworkButton(event) {
        setButtons(() => {
            return{homeButton : false, jdPrintButton : false, artworkMakerButton : false, pratibhaArtwork: false, printPratibhaButton: true}
        })
    }

    
    

    return (
        <Grid container className={classes.sideBarContainer} sx={{ displayPrint: 'none' }}>
            <Grid item container  className={classes.iconContainer}>
                <Tooltip title={<span className={classes.tooltip}>Home</span>} placement="right-start" arrow>
                    <IconButton  onClick={handleHomeButton} component={Link} to='/' sx={{ displayPrint: 'none' }}>
                        <HomeRoundedIcon className={classes.icon} style={{color: (buttons.homeButton) &&'#FFF'}} sx={{ displayPrint: 'none' }}/>
                    </IconButton> 
                </Tooltip>   
            </Grid> 
            <Grid item container  className={classes.iconContainer}>
                <Tooltip title={<span className={classes.tooltip}>Artwork</span>} placement="right-start" arrow>
                    <IconButton  onClick={handleArtworkMakerButton} component={Link} to='/artworkMaker' sx={{ displayPrint: 'none' }}>
                        <AutofpsSelectIcon className={classes.icon} style={{color: (buttons.artworkMakerButton) &&'#FFF'}} sx={{ displayPrint: 'none' }}/>
                    </IconButton>   
                </Tooltip> 
            </Grid>     
            <Grid item container  className={classes.iconContainer}>
                <Tooltip title={<span className={classes.tooltip}>JD Print</span>} placement="right-start" arrow>
                    <IconButton  onClick={handleJdPrintButton} component={Link} to='/jdPrint' sx={{ displayPrint: 'none' }}>
                        <PrintRoundedIcon className={classes.icon} style={{color: (buttons.jdPrintButton) &&'#FFF'}} sx={{ displayPrint: 'none' }}/>
                    </IconButton>
                </Tooltip>    
            </Grid>
            <Grid item container  className={classes.iconContainer}>
                <Tooltip title={<span className={classes.tooltip}>Pratibha Artwork</span>} placement="right-start" arrow>
                    <IconButton  onClick={handlePratibhaArtworkButton} component={Link} to='/pratibhaArtwork' sx={{ displayPrint: 'none' }}>
                        <ApartmentIcon className={classes.icon} style={{color: (buttons.pratibhaArtwork) &&'#FFF'}} sx={{ displayPrint: 'none' }}/>
                    </IconButton>
                </Tooltip>    
            </Grid>
            <Grid item container  className={classes.iconContainer}>
                <Tooltip title={<span className={classes.tooltip}>Pratibha Print</span>} placement="right-start" arrow>
                    <IconButton  onClick={handlePrintPratibhaArtworkButton} component={Link} to='/pratibhaPrint' sx={{ displayPrint: 'none' }}>
                        <AdfScannerIcon className={classes.icon} style={{color: (buttons.printPratibhaButton) &&'#FFF'}} sx={{ displayPrint: 'none' }}/>
                    </IconButton>
                </Tooltip>    
            </Grid>
        </Grid>
    )
}

export default SideBar;