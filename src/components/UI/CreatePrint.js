import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    createBox: {
        display: 'flex',
        width: '48.26mm',
        height: '32mm',
        border: '1px solid red',
        margin: '0 1px'
    },
    createBoxTitleContainer: {
        display: 'flex',
        justifyContent : 'center',
        height: '30px'
    },
    createBoxTitle: {
        fontSize: '22px',
        fontFamily: " 'Times New Roman',Times, serif ",
        fontWeight: 'bolder'
    },
    createBoxBodyContainer: {
        display: 'flex',
        height: '60px'
    },
    createBoxBodyRightContainer: {
        display: 'flex',
        alignContent : 'flex-start',
    },
    createBoxBodyTopContainer: {
        display: 'flex',
        padding: '0 0 0 10%',
        justifyContent : 'center',
        height: '21px'
    },
    createBoxBodyTop: {
        fontSize: '17px',
        fontFamily: " 'Calibri', sans-serif ",
        fontWeight: 'bolder'
    },
    createBoxBodySizesContainer: {
        display: 'flex',
        padding: '0 0 0 24%',
        margin: '0 0 2% 0',
        justifyContent : 'space-between',
        height: '13px'
    },
    createBoxBodySizes: {
        lineHeight: '13px',
        fontSize: '13px',
        fontFamily: " 'Calibri', sans-serif ",
        fontWeight: 'bolder',
    },
    createBoxBodyColourContainer: {
        display: 'flex',
        padding: '0 0 0 10%',
        justifyContent : 'center',
        textTransform: 'uppercase',
        height: '16px'
    },
    createBoxBodyColour: {
        lineHeight: '14px',
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
        padding: '0 5% 0 0',
        justifyContent : 'center',
        alignContent : 'center',
    },
    createBoxFooterCircle: {
        fontSize: '9px',
        width: '12px',
        height: '12px',
        fontFamily: " 'Arial', sans-serif ",
        fontWeight: 'bolder',
        border: '1px solid #000',
        borderRadius: '25px',
        padding: '1% 4%'
    },
    createBoxFooterNumberContainer: {
        display: 'flex',
        padding: '0 7% 0 0',
        justifyContent : 'end',
    },
    createBoxFooterNumber: {
        lineHeight: '24px',
        fontSize: '12px',
        wordSpacing: '20px',
        fontFamily: " 'Arial', sans-serif ",
        fontWeight: '900',
    }
}));

let CreatePrint = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.createBox} style={{ borderStyle : `${props.borderStyle}`}}>
            <Grid item container className={classes.createBoxTitleContainer}>
                <Typography xs={5} className={classes.createBoxTitle}>{props.title}</Typography>
            </Grid>
            <Grid item container className={classes.createBoxBodyContainer}>
                <Grid item container xs={5}>
                    <Grid item container xs={9} className={classes.createBoxBodyTopContainer}>
                        <Typography xs={7} className={classes.createBoxBodyTop}>size</Typography>
                    </Grid>
                    <Grid item container xs={9} className={classes.createBoxBodySizesContainer}>
                        <Typography xs={5} className={classes.createBoxBodySizes}>uk</Typography>
                        <Typography xs={5} className={classes.createBoxBodySizes}>{props.size_uk}</Typography>
                    </Grid>
                    <Grid item container xs={9} className={classes.createBoxBodySizesContainer}>
                        <Typography xs={5} className={classes.createBoxBodySizes}>eu</Typography>
                        <Typography xs={5} className={classes.createBoxBodySizes}>{props.size_eu}</Typography>
                    </Grid>
                    <Grid item container xs={9} className={classes.createBoxBodySizesContainer}>
                        <Typography xs={5} className={classes.createBoxBodySizes}>us</Typography>
                        <Typography xs={5} className={classes.createBoxBodySizes} style={{paddingRight:props.us_styles}}>{props.size_us}</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={7} className={classes.createBoxBodyRightContainer}>
                    <Grid item container xs={12} className={classes.createBoxBodyTopContainer}>
                        <Typography xs={7} className={classes.createBoxBodyTop}>colour</Typography>
                    </Grid>
                    <Grid item container xs={12} className={classes.createBoxBodyColourContainer}>
                        <Typography xs={12} className={classes.createBoxBodyColour}>{props.colour}</Typography>
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

export default CreatePrint;