import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Insert from "./Insert";

const useStyles = makeStyles((theme) => ({
    homeContainer: {
        display: 'flex',
        height: '100vh',
        position: 'relative',
        left: '65px',
        width: 'calc(100% - 65px)',
    },
}));

let Manually = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.homeContainer}>
            <Grid item container>
                <Insert />
            </Grid>
        </Grid>
    )
}

export default Manually;