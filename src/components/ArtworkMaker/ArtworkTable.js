import {useRef} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper,Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@material-ui/core';


import ReactToPrint from 'react-to-print';
import handlePrint from "../UI/PRINT";
import handlePreview from "../UI/PREVIEW";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTableCell-head": {
            color: "white",
            fontWeight : '700',
            fontSize: '22px',
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
        margin: '3% 0'
    },
    tableShowContainer: {
        width: '62%',
        margin: '0 auto',
        fontWeight: '700',
        
    },
}));

let ArtworkTable = (props) => {
    const classes = useStyles();

    const componentRefExcelTable = useRef();
    
    return (
        <Grid container className={classes.introContainer} style={{display: props.displayValues }}>
            <Grid item container className={classes.introInnerContainer}>
                <TableContainer component={Paper} className={classes.tableShowContainer} ref={componentRefExcelTable}>
                    <Table>
                        <TableHead >
                            <TableRow className={classes.root}>
                                <TableCell>S.No.</TableCell>
                                <TableCell align='center'>STYLE</TableCell>
                                <TableCell align='center'>COLOUR</TableCell>
                                <TableCell align='center'>Circle</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className={classes.root}>
                            {(props.TableData).map((item,index) => (
                                <TableRow key={index}>
                                    <TableCell component='th' scope='row'>{item[0]}</TableCell>
                                    <TableCell align='center'>{item[1]}</TableCell>
                                    <TableCell align='center'>{item[2]}</TableCell>
                                    <TableCell align='center'>{item[3]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid item container className='printButtonContainer'>
                    <ReactToPrint
                        xs={8}
                        trigger={() => <button className='printButton'>Print Table</button>}
                        content={() => componentRefExcelTable.current}
                        print={handlePrint}
                    />
                    <ReactToPrint
                        xs={8}
                        trigger={() => <button className='printButton'>Preview Table</button>}
                        content={() => componentRefExcelTable.current}
                        print={handlePreview}
                    />
                </Grid>
            </Grid>
        </Grid>   
    )
}

export default ArtworkTable;