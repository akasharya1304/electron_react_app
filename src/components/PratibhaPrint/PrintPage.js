import { useRef, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Pagination, Stack } from '@mui/material';

import CreatePratibhaPrint from './CreatePratibhaPrint';
import ReactToPrint from 'react-to-print';
import handlePrintPage from '../UI/PAGE_PRINT';
import handlePreviewPage from '../UI/PAGE_PREVIEW';
import CreateSlashPratibhaPrint from './CreateSlashPratibhaPrint';
import CreateLetterPratibhaPrint from './CreateLetterPratibhaPrint';



const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiPaginationItem-root": {
            color: "black",
            fontWeight : '700',
            fontSize: '24px',
            

            '&:hover': {
                color: "white",
                backgroundColor: "green",
            }
        },
    },
    PageOuterContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '1300px',
        width: '70%',
        border: '1px solid blue',
        backgroundColor: '#c40a0a',
        padding: '0',
        margin: '0 auto 5% auto',
        alignContent: 'center',
        justifyContent: 'center'
    },
    PageInnerContainer: {
        display: 'flex',
        alignContent : 'flex-start',
        background: '#FFF',
        height: '290mm',
        width: '205mm',
        padding: '2mm 0 0 5mm',
        margin: '0'
    },
    paginationContainer: {
        display: 'flex',
        backgroundColor: '#4472C4',
        borderRadius: '25px',
        maxWidth: '75%',
        color: 'blue',
        flexGrow : '1',
        justifyContent: 'center',
        alignContent: 'center',
    }
}));


let PrintPage = (props) => {
    const classes = useStyles();
    const componentRef = useRef();


    const [page , setPage] = useState(1);

    function handlePage(event, value) {
        setPage(value)
    }

    console.log(page)
   

    return (
        <Grid item container className={classes.PageOuterContainer}>
        {props.sizeValue === 10 ?
            <>
            <Grid item container className={classes.PageInnerContainer} ref={componentRef}>
            {
                [...Array(36).keys()].map((components, index) => {
                    return(
                        <CreatePratibhaPrint 
                            key={index*100}
                            title={props.title}
                            size_uk={(page+4)*2}
                            size_us={(page+2)*2}
                            size_eu={(page+18)*2}
                            us_styles={page<3? '3px': '0'}
                            colour={props.colour}
                            circle={props.circle}
                        />
                    )
                })
            }
            </Grid>
            <Grid item container >
                <Grid item container className='printButtonContainer'  >
                    <ReactToPrint
                        xs={8}
                        trigger={() => <button className='printButton'>Print - Page</button>}
                        content={() => componentRef.current}
                        print={handlePrintPage}
                    />
                    <ReactToPrint
                        xs={8}
                        trigger={() => <button className='printButton'>Preview - Page</button>}
                        content={() => componentRef.current}
                        print={handlePreviewPage}
                    />
                </Grid>
            </Grid>
            <Grid item container className={classes.paginationContainer}>
                <Stack spacing={2} >
                    <Pagination className={classes.root}  count={12} color="primary" page={page} onChange={handlePage} size="large"  />
                </Stack>
            </Grid>
            </>
            :
            props.sizeValue === 20 ?
            <>
                <Grid item container className={classes.PageInnerContainer} ref={componentRef}>
                {
                    [...Array(36).keys()].map((components, index) => {
                        return(
                            <CreateSlashPratibhaPrint 
                                key={index*100}
                                title={props.title}
                                size_uk={(page*4) + 8}
                                size_us={(page*4) + 4}
                                size_eu={(page*4) + 36}
                                us_styles={page<2? '11px': '6px'}
                                colour={props.colour}
                                circle={props.circle}
                            />
                        )
                    })
                }
                </Grid>
                <Grid item container >
                    <Grid item container className='printButtonContainer'  >
                        <ReactToPrint
                            xs={8}
                            trigger={() => <button className='printButton'>Print - Page</button>}
                            content={() => componentRef.current}
                            print={handlePrintPage}
                        />
                        <ReactToPrint
                            xs={8}
                            trigger={() => <button className='printButton'>Preview - Page</button>}
                            content={() => componentRef.current}
                            print={handlePreviewPage}
                        />
                    </Grid>
                </Grid>
                <Grid item container className={classes.paginationContainer}>
                    <Stack spacing={2} >
                        <Pagination className={classes.root}  count={6} color="primary" page={page} onChange={handlePage} size="large"  />
                    </Stack>
                </Grid>
            </>
            :
            <>
                <Grid item container className={classes.PageInnerContainer} ref={componentRef}>
                {
                    [...Array(36).keys()].map((components, index) => {
                        return(
                            <CreateLetterPratibhaPrint 
                                key={index*100}
                                title={props.title}
                                size_uk={page === 1 ? "S" : page === 2 ? "M" : "L" }
                                size_us={page === 1 ? "S" : page === 2 ? "M" : "L" }
                                size_eu={page === 1 ? "S" : page === 2 ? "M" : "L" }
                                // us_styles={'3px'}
                                page={page}
                                colour={props.colour}
                                circle={props.circle}
                            />
                        )
                    })
                }
                </Grid>
                <Grid item container >
                    <Grid item container className='printButtonContainer'  >
                        <ReactToPrint
                            xs={8}
                            trigger={() => <button className='printButton'>Print - Page</button>}
                            content={() => componentRef.current}
                            print={handlePrintPage}
                        />
                        <ReactToPrint
                            xs={8}
                            trigger={() => <button className='printButton'>Preview - Page</button>}
                            content={() => componentRef.current}
                            print={handlePreviewPage}
                        />
                    </Grid>
                </Grid>
                <Grid item container className={classes.paginationContainer}>
                    <Stack spacing={2} >
                        <Pagination className={classes.root}  count={3} color="primary" page={page} onChange={handlePage} size="large"  />
                    </Stack>
                </Grid>
            </>
        }
        </Grid>
        
    )
}

export default PrintPage;