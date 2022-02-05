import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField, Typography } from '@material-ui/core';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import CreateTable from './CreateTable';


const useStyles = makeStyles((theme) => ({
    introContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        height: '100%',
        width: '100%',
        backgroundColor: '#4472C4'
    },
    reloadButton: {
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        margin: '2% 0 0 7% ',
        transform: 'scale(1.2)',

        "&:hover" : {
            color: 'red',
            backgroundColor: '#4472C4'
        }
    },
    heading: {
        fontSize: '32px',
        fontWeight: '800',
        textDecoration: 'underline',
        color: '#1a4ba1',
        letterSpacing: '0.2rem',
        margin: '1% 5% 0 5%'
    },
    introInnerContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0',
        alignContent: 'center',
        justifyContent: 'flex-start', 
    },
    title: {
        fontWeight: '700',
        color: '#dd7724',
        margin: '1% 0'
    },
    textArea: {
        width :'90%',
        padding: '1%',
        border: '5px dotted #101d8d',
        backgroundColor: '#0370a3',
    },
    fontColor: {
        color: '#FFF',
        fontSize : '20px',
        fontWeight: '600',
        lineHeight : '2'
    },
    button: {
        display: 'flex',
        width : '40%',
        borderRadius: '15px',
        margin: '1% 0',
        fontSize: '20px',
        fontWeight : '700',
        backgroundColor: '#dd7724',
        color: '#FFF',
        padding: '1%',

        "&:hover" : {
            backgroundColor: '#18b603',
        }
    }
}));

let InsertRawData = (props) => {
    const classes = useStyles();

    
    const [displayValue , setDisplayValue] = useState('none');
    const [area , setArea] = useState([]);
    const [data , setData] = useState([]);

    let item = [];

    function refreshPage(){
        window.location.reload();
    } 

    function handleTextArea(event) {
        const areaValue = event.target.value
        const line = areaValue.split('\n')
        for(let i=0 ; i<line.length ; i++){
            if((line[i].split('\t')).length <= 1){
                i++
            }
            else {
                item.push(line[i].split('\t'))
            }
        }

        for(let i=0; i<item.length ; i++){
            item[i][15] = '1';
        }

        setArea(line)
        setData(item)
    }

    function handleDataDisplay() {
        setDisplayValue('block');
    }

    return (
        <Grid container className={classes.introContainer}>
            <Grid item xs={4}>
            <Button variant='text' className={classes.reloadButton} onClick={refreshPage}>
                <RefreshRoundedIcon />
            </Button>
            </Grid>
            <Typography xs={10} variant='h3' component='div' className={classes.heading}>
                JD POLYBAG PRINTOUT
            </Typography>
            <Grid item container className={classes.introInnerContainer}>
                <Typography variant='h3' component='div' className={classes.title}>
                    Paste data down Here
                </Typography>
                <TextField 
                    variant='standard' 
                    InputProps={{ disableUnderline: true }}
                    multiline 
                    minRows={12} 
                    className={classes.textArea}
                    inputProps={{className: classes.fontColor}}
                    onChange={handleTextArea} 
                    
                    placeholder=' 1	CH324	BLACK	            25	45	80	135	145	175	150	125	65	45	40	45
                                    2	CH326	MONO PRINT	    15	35	65	105	115	135	115	100	55	40	35	40
                                    3	CH348	BLACK	            20	30	65	90	130	125	115	95	60	35	30	35
                                    4	CH353	WHITE	            20	35	80	115	165	165	150	120	75	40	35	40
                                    5	CH356	ORANGE	    15	35	50	70	95	90	85	70	45	30	35	30
                                    '
                />
                <Button variant='text' className={classes.button} onClick={handleDataDisplay}>
                    Show Data
                </Button>
            </Grid>
            <CreateTable displayValues={displayValue} data={data} />
        </Grid>
    )
}

export default InsertRawData;