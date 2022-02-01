import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper,Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@material-ui/core';


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
}));

let TableShow = (props) => {
    const classes = useStyles();
    
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
                            {(props.TableData).map((item,index) => (
                                <TableRow key={index}>
                                    <TableCell component='th' scope='row'>{item[0]}</TableCell>
                                    <TableCell align='right'>{item[1]}</TableCell>
                                    <TableCell align='right'>{item[2]}</TableCell>
                                    <TableCell align='right'>{item[3]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>   
    )
}

export default TableShow;