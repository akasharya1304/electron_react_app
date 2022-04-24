import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import InsertFullTable from "./InsertFullTable";


const useStyles = makeStyles((theme) => ({
    homeContainer: {
        display: 'flex',
        position: 'relative',
        left: '65px',
        height: '100vh',
        width: 'calc(100% - 65px)',
    },
    printContainer :{
        display: 'flex',
        height: '290mm',
        width: '205mm',
    }
}));

let PratibhaPrint = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.homeContainer}>
            <Grid item container>
                <InsertFullTable />
            </Grid>
        </Grid>
    )
}

export default PratibhaPrint;