import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import InsertRawData from '../UI/InsertRawData';



const useStyles = makeStyles((theme) => ({
    introContainer: {
        display: 'flex',
        backgroundColor: '#4472C4',
    },
    
}));

let InsertFullTable = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.introContainer}>
            <InsertRawData />
        </Grid>
    )
}

export default InsertFullTable;