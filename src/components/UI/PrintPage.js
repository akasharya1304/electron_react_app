import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CreatePrint from './CreatePrint';


const useStyles = makeStyles((theme) => ({
    PageContainer: {
        display: 'flex',
        background: '#FFF',
        height: '290mm',
        width: '210mm',
        border: '1px solid red',
        padding: '0',
        margin: '0'
    },
}));

let PrintPage = () => {
    const classes = useStyles();
   

    return (
        <Grid container className={classes.PageContainer}>
            {
                [...Array(36).keys()].map((components, index) => {
                    return(
                        <CreatePrint 
                            key={index*100}
                            // borderStyle='none'
                            title='CH256'
                            size_uk='10'
                            size_eu='38'
                            size_us='6'
                            us_styles='3px'
                            colour='mono print'
                            circle='2'
                        />
                    )
                })
            }
        </Grid>
    )
}

export default PrintPage;