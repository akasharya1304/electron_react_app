import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Typography } from '@material-ui/core';
import PratibhaCreate from './PratibhaCreate';
import PratibhaSlashCreate from './PratibhaSlashCreate';
import PratibhaLetterCreate from './PratibhaLetterCreate';


const useStyles = makeStyles((theme) => ({
    // displayBoxContainer: {
    //     display: 'flex',
    //     flexDirection: 'column', 
    //     // height: '100vh',
    //     justifyContent: 'center',
    //     alignContent: 'center',
    //     backgroundColor : '#FFF',
    //     // border: '1px solid black',
    //     pageBreakAfter: 'always',
    // },
    displayContainer: {
        display: 'flex',
        width: '892px',
        height: '630px',
        margin: '81px auto',
        border: '1px solid red',
        backgroundColor: '#FFF',
        alignContent: 'flex-start',
        pageBreak: 'always'
    },
    displayHeadingContainer: { 
        display: 'flex',
        height: '55px',
        justifyContent: 'center',
        color: '#199c19',
    },
    displayHeadingTop: {
        margin: '3% 0 0 0',
        height: '30px',
        fontFamily: " 'Arial', sans-serif ",
        fontSize: '24px',
        fontWeight: '550'
    },
    displayHeadingBottom: {
        margin: '1% 0 0 36%',
        height: '25px',
        fontFamily: " 'Arial', sans-serif ",
        fontSize: '18px',
        fontWeight: '650'
    },
    displayTitleContainer: {
        display: 'flex',
        height: '50px',
        alignContent: 'end',
        margin: '6% 0 2% 10%'

    },
    displayTitle: {
        fontFamily: " 'Calibri', sans-serif ",
        fontSize: '20px',
        fontWeight: 'bolder',
        color: '#060681',
        textTransform: 'uppercase'
    },
    displayArtworkContainer: {
        border: '1px solid red',
        height: '361px',
        margin: '9.5px 84px',
        alignContent: 'flex-start',
    }
}));

let PratibhaDisplayBox = (props) => {
    const classes = useStyles();

    return (
        // <Grid container className={classes.displayBoxContainer} >
            <Grid item container className={classes.displayContainer}>
                <Grid item container xs= {12} className={classes.displayHeadingContainer} style={{opacity:`${1-props.id}`}}>
                    <Typography xs={12} className={classes.displayHeadingTop}># J.D. POLYBAG STICKER - Date: {props.date}</Typography>
                    <Typography xs={12} className={classes.displayHeadingBottom}>Size : 32.5 X 50 mm</Typography>
                </Grid>
                <Grid item container xs= {12} className={classes.displayTitleContainer}>
                    <Typography xs={12} className={classes.displayTitle}># {props.Title} - {props.colour}</Typography>
                </Grid>
                {props.sizeValue === 10 ? 
                <Grid item container xs= {12} className={classes.displayArtworkContainer}> 
                <PratibhaCreate 
                        title={props.Title}
                        size_uk='10'
                        size_eu='38'
                        size_us='6'
                        us_styles='3px'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaCreate 
                        title={props.Title}
                        size_uk='12'
                        size_eu='40'
                        size_us='8'
                        us_styles='3px'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaCreate 
                        title={props.Title}
                        size_uk='14'
                        size_eu='42'
                        size_us='10'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaCreate 
                        title={props.Title}
                        size_uk='16'
                        size_eu='44'
                        size_us='12'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaCreate 
                        title={props.Title}
                        size_uk='18'
                        size_eu='46'
                        size_us='14'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaCreate 
                        title={props.Title}
                        size_uk='20'
                        size_eu='48'
                        size_us='16'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaCreate 
                        title={props.Title}
                        size_uk='22'
                        size_eu='50'
                        size_us='18'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaCreate 
                        title={props.Title}
                        size_uk='24'
                        size_eu='52'
                        size_us='20'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaCreate 
                        title={props.Title}
                        size_uk='26'
                        size_eu='54'
                        size_us='22'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaCreate 
                        title={props.Title}
                        size_uk='28'
                        size_eu='56'
                        size_us='24'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaCreate 
                        title={props.Title}
                        size_uk='30'
                        size_eu='58'
                        size_us='26'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaCreate 
                        title={props.Title}
                        size_uk='32'
                        size_eu='60'
                        size_us='28'
                        colour={props.colour}
                        circle={props.circle}
                    />
                </Grid>
            :
            props.sizeValue === 20 ?
            <Grid item container className={classes.displayArtworkContainer} style={{ height: '241px', width: '543px' }}> 
            <PratibhaSlashCreate
                        title={props.Title}
                        size_uk='8/10'
                        size_us='4/6'
                        size_eu='36/38'
                        us_styles='6px'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaSlashCreate
                        title={props.Title}
                        size_uk='12/14'
                        size_us='8/10'
                        size_eu='40/42'
                        us_styles='6px'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaSlashCreate 
                        title={props.Title}
                        size_uk='16/18'
                        size_us='12/14'
                        size_eu='44/46'
                        us_styles='3px'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaSlashCreate
                        title={props.Title}
                        size_uk='20/22'
                        size_us='16/18'
                        size_eu='48/50'
                        us_styles='3px'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaSlashCreate
                        title={props.Title}
                        size_uk='24/26'
                        size_us='20/22'
                        size_eu='52/54'
                        us_styles='3px'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaSlashCreate 
                        title={props.Title}
                        size_uk='28/30'
                        size_us='24/26'
                        size_eu='56/58'
                        us_styles='3px'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaSlashCreate 
                        title={props.Title}
                        size_uk='32/34'
                        size_us='28/30'
                        size_eu='60/62'
                        us_styles='3px'
                        colour={props.colour}
                        circle={props.circle}
                    />
            </Grid>
            :
            <Grid item container className={classes.displayArtworkContainer} style={{ height: '121px', width: '543px' }}> 
                    <PratibhaLetterCreate
                        title={props.Title}
                        size_uk='S'
                        size_us='S'
                        size_eu='S'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaLetterCreate 
                        title={props.Title}
                        size_uk='M'
                        size_us='M'
                        size_eu='M'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <PratibhaLetterCreate 
                        title={props.Title}
                        size_uk='L'
                        size_us='L'
                        size_eu='L'
                        colour={props.colour}
                        circle={props.circle}
                    />
            </Grid>
            }
            </Grid>
        // </Grid>
    )
}

export default PratibhaDisplayBox;