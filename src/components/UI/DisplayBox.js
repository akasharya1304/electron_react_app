import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Typography } from '@material-ui/core';
import Create from './Create';


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
        // height: '730px',
        margin: '81px auto',
        // margin: '30px auto 81px auto',
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

let DisplayBox = (props) => {
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
                <Grid item container xs= {12} className={classes.displayArtworkContainer}>
                {/* <Create 
                        title={props.Title}
                        size_uk='8'
                        size_eu='36'
                        size_us='4'
                        uk_styles='3px'
                        us_styles='3px'
                        colour={props.colour}
                        circle={props.circle}
                    /> */}
                    <Create 
                        title={props.Title}
                        size_uk='10'
                        size_eu='38'
                        size_us='6'
                        us_styles='3px'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <Create 
                        title={props.Title}
                        size_uk='12'
                        size_eu='40'
                        size_us='8'
                        us_styles='3px'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <Create 
                        title={props.Title}
                        size_uk='14'
                        size_eu='42'
                        size_us='10'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <Create 
                        title={props.Title}
                        size_uk='16'
                        size_eu='44'
                        size_us='12'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <Create 
                        title={props.Title}
                        size_uk='18'
                        size_eu='46'
                        size_us='14'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <Create 
                        title={props.Title}
                        size_uk='20'
                        size_eu='48'
                        size_us='16'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <Create 
                        title={props.Title}
                        size_uk='22'
                        size_eu='50'
                        size_us='18'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <Create 
                        title={props.Title}
                        size_uk='24'
                        size_eu='52'
                        size_us='20'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <Create 
                        title={props.Title}
                        size_uk='26'
                        size_eu='54'
                        size_us='22'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <Create 
                        title={props.Title}
                        size_uk='28'
                        size_eu='56'
                        size_us='24'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <Create 
                        title={props.Title}
                        size_uk='30'
                        size_eu='58'
                        size_us='26'
                        colour={props.colour}
                        circle={props.circle}
                    />
                    <Create 
                        title={props.Title}
                        size_uk='32'
                        size_eu='60'
                        size_us='28'
                        colour={props.colour}
                        circle={props.circle}
                    />
                </Grid>
            </Grid>
        // </Grid>
    )
}

export default DisplayBox;