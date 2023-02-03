import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Body from "./Body";
import Content from "./content";

const useStyles = makeStyles((theme) => ({
  nakdContainer: {
    display: "flex",
    position: "relative",
    left: "65px",
    height: "100vh",
    width: "calc(100% - 65px)",
    backgroundColor: "#4472C4",
  },
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "#4472C4",
  },
  TitleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "800",
    textDecoration: "underline",
    color: "#1a4ba1",
    letterSpacing: "0.2rem",
  },
  contentContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0",
    border: '1px solid red'
  },
  printBox: {
    display :'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: "#4472C4",
}
}));

let Nakd = () => {
  const classes = useStyles();

  return (
    <div className={classes.nakdContainer}>
      <div className={classes.pageContainer}>
        <div className={classes.TitleContainer}>
          <Typography variant="h3" className={classes.heading}>
            NAKD
          </Typography>
        </div>
        <Body />
      </div>
    </div>
  );
};

export default Nakd;
