import { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import InsertData from './InsertData';
import PrintPage from '../UI/PrintPage';

import ReactToPrint from 'react-to-print';
import handlePrint from "../UI/PRINT";
import handlePreviewPage from '../UI/PAGE_PREVIEW';


const useStyles = makeStyles((theme) => ({
    homeContainer: {
        display: 'flex',
        height: '100vh',
        position: 'relative',
        left: '65px',
        width: 'calc(100% - 65px)',
    },
    printContainer :{
        display: 'flex',
        height: '290mm',
        width: '210mm',
        margin: '5% 0 0 5%',
        // alignContent: 'center',
        // justifyContent: 'center',
        border: '1px solid blue'
    }
}));

let ArtworkMaker = () => {
    const classes = useStyles();
    const componentRef = useRef();

    return (
        <Grid container className={classes.homeContainer}>
            <Grid item container>
                <InsertData />
            </Grid>
            {/* <Grid item container className={classes.printContainer}>
                <Grid item container  ref={componentRef}>
                    <PrintPage />
                </Grid>
            </Grid>
            <Grid item container >
                <Grid item container className='printButtonContainer'  >
                    <ReactToPrint
                        xs={8}
                        trigger={() => <button className='printButton'>Print - Page</button>}
                        content={() => componentRef.current}
                        print={handlePrint}
                    />
                    <ReactToPrint
                        xs={8}
                        trigger={() => <button className='printButton'>Preview - Page</button>}
                        content={() => componentRef.current}
                        print={handlePreviewPage}
                    />
                </Grid>
            </Grid> */}
        </Grid>
    )
}

export default ArtworkMaker;