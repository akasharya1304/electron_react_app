import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import InsertData from './InsertData';



const useStyles = makeStyles((theme) => ({
    homeContainer: {
        display: 'flex',
        height: '100vh',
        position: 'relative',
        left: '65px',
        width: 'calc(100% - 65px)',
    },
    
}));

let ArtworkMaker = () => {
    const classes = useStyles();
    
    return (
        <Grid container className={classes.homeContainer}>
            <Grid item container>
                <InsertData />
            </Grid>
            
        </Grid>
    )
}

export default ArtworkMaker;