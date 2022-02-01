import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Intro from './Intro';


const useStyles = makeStyles((theme) => ({
    homeContainer: {
        display: 'flex',
        height: '100vh',
        position: 'relative',
        left: '65px',
        width: 'calc(100% - 65px)',
    },
}));

let Home = (props) => {
    const classes = useStyles();

    function buttonhandle(buttonName) {
        props.onButton(buttonName)
    }

    return (
        <Grid container className={classes.homeContainer}>
            <Grid item container>
                <Intro onButtonHandle={buttonhandle}/>
            </Grid>
        </Grid>
    )
}

export default Home;