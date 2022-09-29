import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    createBox: {
        display: 'flex',
        alignContent: 'flex-start',
        width: '50mm',
        height: '31.3mm',
        margin: '0 0',
        // border: '1px solid red'
    },
    createBoxTitleContainer: {
        display: 'flex',
        justifyContent : 'center',
        height: '22px'
    },
    createBoxTitle: {
        fontSize: '22px',
        fontFamily: " 'Times New Roman',Times, serif ",
        fontWeight: 'bolder'
    },
    createBoxBodyContainer: {
        display: 'flex',
    },
    createBoxBodyRightContainer: { 
        display: 'flex',
        alignContent : 'center',
        padding: '0 10% 0 0'
    },
    createBoxBodyTopContainer: {
        display: 'flex',
        padding: '0 0 0 10%',
        justifyContent : 'center',
        height: '24px'
    },
    createBoxBodyTop: {
        fontSize: '18px',
        fontFamily: " 'Calibri', sans-serif ",
        fontWeight: 'bolder'
    },
    createBoxBodySizesContainer: {
        display: 'flex',
        padding: '0 0 0 24%',
        margin: '0 0 2% 0',
        // justifyContent : 'space-between',
    },
    createBoxBodySizes: {
        lineHeight: '14px',
        fontSize: '12px',
        fontFamily: " 'Calibri', sans-serif ",
        fontWeight: '600',
    },
    createBoxBodySizesNumber: {
        lineHeight: '14px',
        fontSize: '14px',
        fontFamily: " 'Calibri', sans-serif ",
        fontWeight: '600',
    },
    createBoxBodyColourContainer: {
        display: 'flex',
        padding: '0 0 0 0',
        justifyContent : 'center',
        textTransform: 'uppercase',
        height: '16px'
    },
    createBoxBodyColour: {
        lineHeight: '10px',
        fontSize: '14px',
        fontFamily: " 'Calibri', sans-serif ",
        fontWeight: 'bolder',
    },
    createBoxFooterContainer: {
        display: 'flex',
        justifyContent : 'space-between',
        height: '25px'
    },
    createBoxFooterCircleContainer: {
        display: 'flex',
        padding: '1% 0 3% 0', 
        justifyContent : 'center',
        alignContent : 'flex-start',
    },
    createBoxFooterCircle: {
        fontSize: '9.2px',
        width: '13px',
        height: '13px',
        fontFamily: " 'Arial', sans-serif ",
        fontWeight: 'bolder',
        border: '1.5px solid #000',
        borderRadius: '25px',
        padding: '0 4% 1% 4%'
    },
    createBoxFooterNumberContainer: {
        display: 'flex',
        padding: '0 0 8% 2%',
    },
    createBoxFooterNumber: {
        fontSize: '12px',
        wordSpacing: '20px',
        fontFamily: " 'Arial', sans-serif ",
        fontWeight: '700',
    }
}));

let CreateSlashPratibhaPrint = (props) => {
    const classes = useStyles();
    let letterSpace = '0.00938em';
    let fontSizes = '14px';

    if((props.colour).length <= 6) {
        letterSpace = '0.05em';
        fontSizes = '15px'
    }

    if((props.colour).length >= 11) {
        fontSizes = '12px'
    }

    return (
        <Grid container className={classes.createBox} style={{ borderStyle : `${props.borderStyle}`}}>
            <Grid item container className={classes.createBoxTitleContainer}>
                <Typography xs={5} className={classes.createBoxTitle}>{props.title}</Typography>
            </Grid>
            <Grid item container className={classes.createBoxBodyContainer}>
                <Grid item container xs={6}>
                    <Grid item container xs={12} className={classes.createBoxBodyTopContainer}>
                        <Typography xs={7} className={classes.createBoxBodyTop} style={{ marginRight: '30px' }}>size</Typography>
                    </Grid>
                    <Grid item container xs={12} className={classes.createBoxBodySizesContainer}>
                        <Typography xs={6} className={classes.createBoxBodySizes}>UK</Typography>
                        <Typography xs={6} className={classes.createBoxBodySizesNumber} style={{ paddingLeft: '6px' }}>{props.size_uk}/{props.size_uk + 2}</Typography>
                    </Grid>
                    <Grid item container xs={12} className={classes.createBoxBodySizesContainer}>
                        <Typography xs={6} className={classes.createBoxBodySizes}>US</Typography>
                        <Typography xs={6} className={classes.createBoxBodySizesNumber} style={{paddingLeft:props.us_styles}}>{props.size_us}/{props.size_us + 2}</Typography>
                    </Grid>
                    <Grid item container xs={12} className={classes.createBoxBodySizesContainer}>
                        <Typography xs={6} className={classes.createBoxBodySizes}>EU</Typography>
                        <Typography xs={6} className={classes.createBoxBodySizesNumber} style={{ paddingLeft: '6px' }}>{props.size_eu}/{props.size_eu + 2}</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={6} className={classes.createBoxBodyRightContainer}>
                    <Grid item container xs={12} className={classes.createBoxBodyTopContainer}>
                        <Typography xs={7} className={classes.createBoxBodyTop}>colour</Typography>
                    </Grid>
                    <Grid item container xs={12} className={classes.createBoxBodyColourContainer}>
                        <Typography xs={12} style={{ letterSpacing: `${letterSpace}`, fontSize: `${fontSizes}` }} className={classes.createBoxBodyColour}>{props.colour}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container className={classes.createBoxFooterContainer}>
                <Grid item container xs={4} className={classes.createBoxFooterCircleContainer}>
                    <Grid item className={classes.createBoxFooterCircle}>{props.circle}</Grid>
                </Grid>
                <Grid item container xs={4} className={classes.createBoxFooterNumberContainer}>
                    <Typography xs={12} className={classes.createBoxFooterNumber}>19961</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CreateSlashPratibhaPrint;