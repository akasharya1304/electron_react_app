import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Body from "./Body";
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

const useStyles = makeStyles((theme) => ({
  barcodeContainer: {
    display: "flex",
    position: "relative",
    left: "65px",
    // height: "100vh",
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
  reloadButton: {
    display: "flex",
    color: "white",
    marginRight: '10%',
    transform: "scale(1.2)",

    "&:hover": {
      color: "red",
      backgroundColor: "#4472C4",
    },
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
    border: "1px solid red",
  },
  printBox: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#4472C4",
  },
}));

const Barcode = () => {
  const classes = useStyles();
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className={classes.barcodeContainer}>
      <div className={classes.pageContainer}>
        <div className={classes.TitleContainer}>
          <Button
            variant="text"
            className={classes.reloadButton}
            onClick={refreshPage}
          >
            <RefreshRoundedIcon />
          </Button>
          <Typography variant="h3" className={classes.heading}>
            BARCODE STICKER
          </Typography>
        </div>
        <Body />
      </div>
    </div>
  );
};

export default Barcode;
