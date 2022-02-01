import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import TableData from './TableData';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';


const useStyles = makeStyles((theme) => ({
    introContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#4472C4'
    },
    reloadButton: {
        display: 'flex',
        color: 'white',
        margin: '0 0 0 2% ',
        transform: 'scale(1.2)',

        "&:hover" : {
            color: 'red',
            backgroundColor: '#4472C4'
        }
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
        margin: '2% 0 1% 0',
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

let InsertData = () => {
    const classes = useStyles();

    const [displayValue , setDisplayValue] = useState('none');
    const [area , setArea] = useState([]);
    const [data , setData] = useState([]);

    function refreshPage(){
        window.location.reload();
    } 

    function handleTextArea(event) {
        const areaValue = event.target.value
        const line = areaValue.split('\n')
        let item = [];
        for(let i=0 ; i<line.length ; i++){
            if((line[i].split('\t')).length <= 1){
                i++
            }
            else {
                item.push(line[i].split('\t'))
            }
        }

        for(let i=0; i<item.length ; i++){
            item[i][3] = '1';
        }

        setArea(line)
        setData(item)
    }

    function handleDataDisplay() {
        setDisplayValue('block');
    }

    return (
        <Grid container className={classes.introContainer}>
            <Button 
                variant='text' 
                className={classes.reloadButton} 
                type="submit" 
                onClick={refreshPage}
            >
                <RefreshRoundedIcon />
            </Button>
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
                    placeholder=' 1	CH324	BLACK 
                                    2	CH326	MONO PRINT
                                    3	CH348	BLACK  
                                    4	CH353	WHITE  '
                />
                <Button variant='text' className={classes.button} onClick={handleDataDisplay}>
                    Show Data
                </Button>
            </Grid>
            <TableData displayValues={displayValue} data={data}/>
        </Grid>
    )
}

export default InsertData;