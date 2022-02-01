import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Create from '../UI/Create';


const useStyles = makeStyles((theme) => ({
    introContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#4472C4'
    },
    introInnerContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: '3% 5%',
        padding: '5%',
        border: '1px solid red',
        backgroundColor: '#FFF',
        alignContent: 'center',
        justifyContent: 'flex-start', 
    },
}));

let Insert = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.introContainer}>
            <Grid item container className={classes.introInnerContainer}>
                <Create 
                    title='CH345'
                    size_uk='10'
                    size_eu='38'
                    size_us='6'
                    us_styles='3px'
                    colour='Multi Black'
                    circle='1'
                />
                <Create 
                    title='CH345'
                    size_uk='12'
                    size_eu='40'
                    size_us='8'
                    us_styles='3px'
                    colour='Multi Black'
                    circle='2'
                />
                <Create 
                    title='CH345'
                    size_uk='14'
                    size_eu='42'
                    size_us='10'
                    colour='Multi Black'
                    circle='2'
                />
                <Create 
                    title='CH345'
                    size_uk='16'
                    size_eu='44'
                    size_us='12'
                    colour='Multi Black'
                    circle='1'
                />
            </Grid>
        </Grid>
    )
}

export default Insert;