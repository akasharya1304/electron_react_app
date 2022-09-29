import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper,Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@material-ui/core';

import {useRef} from 'react';

import ReactToPrint from 'react-to-print';
import handlePrint from "../UI/PRINT";
import handlePreviewTable from '../UI/FULL_PREVIEW';

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
        width: '99%',
        margin: '0 auto',
        fontWeight: '700'
    },
}));

let TableShow = (props) => {
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
                                <TableCell align='center'>10</TableCell>
                                <TableCell align='center'>12</TableCell>
                                <TableCell align='center'>14</TableCell>
                                <TableCell align='center'>16</TableCell>
                                <TableCell align='center'>18</TableCell>
                                <TableCell align='center'>20</TableCell>
                                <TableCell align='center'>22</TableCell>
                                <TableCell align='center'>24</TableCell>
                                <TableCell align='center'>26</TableCell>
                                <TableCell align='center'>28</TableCell>
                                <TableCell align='center'>30</TableCell>
                                <TableCell align='center'>32</TableCell>
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
                                    <TableCell align='center'>{item[4]}</TableCell>
                                    <TableCell align='center'>{item[5]}</TableCell>
                                    <TableCell align='center'>{item[6]}</TableCell>
                                    <TableCell align='center'>{item[7]}</TableCell>
                                    <TableCell align='center'>{item[8]}</TableCell>
                                    <TableCell align='center'>{item[9]}</TableCell>
                                    <TableCell align='center'>{item[10]}</TableCell>
                                    <TableCell align='center'>{item[11]}</TableCell>
                                    <TableCell align='center'>{item[12]}</TableCell>
                                    <TableCell align='center'>{item[13]}</TableCell>
                                    <TableCell align='center'>{item[14]}</TableCell>
                                    <TableCell align='center'>{item[15]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid item container className='printButtonContainer'>
                    <ReactToPrint
                        trigger={() => <button className='printButton'>Print Table</button>}
                        content={() => componentRefExcelTable.current}
                        print={handlePrint}
                    />
                    <ReactToPrint
                        trigger={() => <button className='printButton'>Preview Table</button>}
                        content={() => componentRefExcelTable.current}
                        print={handlePreviewTable}
                    />
                </Grid>
            </Grid>
        </Grid>   
    )
}

export default TableShow;