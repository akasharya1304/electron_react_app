import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, FormControl, FormControlLabel, Paper,Radio,RadioGroup,Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@material-ui/core';
import { useState } from 'react';
import TableShow from '../UI/TableShow';


const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTableCell-head": {
            color: "white",
            fontWeight : '700',
            fontSize: '24px',
            backgroundColor: "blue"
        },
        "& .MuiTableCell-body": {
            color: "white",
            fontWeight : '500',
            fontSize: '20px',
            backgroundColor: "#000"
        },
    },
    introContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#4472C4'
    },
    introInnerContainer: {
        display: 'flex',
        margin: '3% 0 0 0'
    },
    tableContainer: {
        width: '75%',
        margin: '0 auto' ,
        fontWeight: '700'
    },
    formControl: {
        padding :'0 5%',
        borderBottom : '2px solid white'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        display: 'flex',
        width : '35%',
        borderRadius: '15px',
        margin: '2% 0',
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

let TableData = (props) => {
    const classes = useStyles();
    let artworkData = props.data;
    const [displayValue , setDisplayValue] = useState('none');
    const [artwork, setArtwork] = useState([]);

    function handleCircleRadio(event) {
        const {name , value} = event.target;
        console.log(name, value)
        for(let i=0; i<artworkData.length; i++) {
            if(artworkData[i].length <= 4){
                if(i === name-1){
                    if(artworkData[name-1][3] != value){
                        artworkData[name-1][3] = value;
                    }
                }
            }
        }
    }

    function handleTableData(event) {
        setArtwork(artworkData)
        setDisplayValue('block');
    }
    
    return (
        <Grid container className={classes.introContainer} style={{display: props.displayValues }}>
            <Grid item container className={classes.introInnerContainer}>
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table sx={{ width: 650 }}>
                        <TableHead >
                            <TableRow className={classes.root}>
                                <TableCell>S.No.</TableCell>
                                <TableCell align='right'>STYLE</TableCell>
                                <TableCell align='right'>COLOUR</TableCell>
                                <TableCell align='right'>Circle</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className={classes.root}>
                            {(props.data).map((item,index) => (
                                <TableRow key={index}>
                                    <TableCell component='th' scope='row'>{item[0]}</TableCell>
                                    <TableCell align='right'>{item[1]}</TableCell>
                                    <TableCell align='right'>{item[2]}</TableCell>
                                    <FormControl className={classes.formControl}>
                                        <RadioGroup row defaultValue="1">
                                            <FormControlLabel 
                                                value="1" 
                                                control={<Radio />} 
                                                label="1" 
                                                labelPlacement="end" 
                                                name={item[0]}
                                                onChange={handleCircleRadio}
                                            />

                                            <FormControlLabel 
                                                value="2" 
                                                control={<Radio />} 
                                                label="2" 
                                                labelPlacement="end" 
                                                name={item[0]}
                                                onChange={handleCircleRadio}
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid item container className={classes.buttonContainer}>
                    <Button 
                        variant='text' 
                        type='submit' 
                        className={classes.button} 
                        onClick={handleTableData}
                    >
                        SUBMIT
                    </Button>
                </Grid>
                <TableShow displayValues={displayValue} TableData={artwork}/>
            </Grid>
        </Grid>   
    )
}

export default TableData;