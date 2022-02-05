import {useRef, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, FormControl, FormControlLabel, Paper,Radio,RadioGroup,Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@material-ui/core';

import ReactToPrint from 'react-to-print';
import DisplayBox from '../UI/DisplayBox';
import handlePrint from "../UI/PRINT";
import handlePreview from "../UI/PREVIEW";
import ArtworkTable from './ArtworkTable';


import './auto.css'


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
        width: '100%',
        backgroundColor: '#4472C4'
    },
    introInnerContainer: {
        display: 'flex',
        justifyContent: 'center',
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
    },
    artworkBox: {
        display :'flex',
        flexDirection: 'column',
        // margin: '4% 0 0 0',
        alignContent: 'center',
        justifyContent: 'center',
        pageBreakAfter: 'always'
    }
}));

let TableData = (props) => {
    const classes = useStyles();
    const componentRef = useRef();

    let today = new Date();
    let date = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();


    let artworkData = props.data;
    const [displayValue , setDisplayValue] = useState('none');
    const [artwork, setArtwork] = useState([]);

    function handleCircleRadio(event) {
        const {name , value} = event.target;
        console.log(name, value)
        for(let i=0; i<artworkData.length; i++) {
            if(artworkData[i].length <= 4){
                if(i === name-1){
                    if(artworkData[name-1][3] !== value){
                        artworkData[name-1][3] = value;
                    }
                }
            }
        }
    }

    function handleTableData(event) {
        setArtwork(artworkData)
        setDisplayValue('block');
        console.log(artwork)
    }
    
    return (
        <Grid container className={classes.introContainer}  style={{display: props.displayValues }}>
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
                        {(props.data).map((item,index) => (
                            <TableBody key={index} className={classes.root}>
                                <TableRow >
                                    <TableCell component='th' scope='row'>{item[0]}</TableCell>
                                    <TableCell align='center'>{item[1]}</TableCell>
                                    <TableCell align='center'>{item[2]}</TableCell>
                                    <FormControl className={classes.formControl} component='td'>
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
                            </TableBody>
                        ))}
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
                <ArtworkTable  displayValues={displayValue} TableData={artwork}/>
                <Grid ref={componentRef} className={classes.artworkBox}>
                    {
                        artwork.map(boxItem => {
                            return (
                                <DisplayBox 
                                    key={boxItem[0]}
                                    id={boxItem[0] -1}
                                    date={date}
                                    Title={boxItem[1]}
                                    colour={boxItem[2]}
                                    circle={boxItem[3]}
                                />
                            )
                        })
                    }
                </Grid>
                <Grid item container style={{display: `${displayValue}` }}>
                    <Grid item container className='printButtonContainer'  >
                        <ReactToPrint
                            xs={8}
                            trigger={() => <button className='printButton'>Print - ARTWORK</button>}
                            content={() => componentRef.current}
                            print={handlePrint}
                        />
                        <ReactToPrint
                            xs={8}
                            trigger={() => <button className='printButton'>Preview - ARTWORK</button>}
                            content={() => componentRef.current}
                            print={handlePreview}
                        />
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>   
    )
}

export default TableData;