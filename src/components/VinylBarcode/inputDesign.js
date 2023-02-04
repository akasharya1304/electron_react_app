import { IconButton, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles((theme) => ({
  inputDesignBox: {
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    alignItems: "flex-start",
    padding: "4% 8%",
    backgroundColor: "#c40a0a",
    width: "100%",
    height: "max-content",
    borderRadius: 10,
    margin: "10px 0",
  },
  headingContainer: {
    display: "flex",
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    fontFamily: " 'Arial', sans-serif ",
    fontSize: "20px",
    fontWeight: "700",
    color: "#FFF",
  },
  textInputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  textInputTitle: {
    display: "flex",
    fontFamily: " 'Arial', sans-serif ",
    fontSize: "20px",
    fontWeight: "700",
    color: "#FFF",
    width: 120,
    backgroundColor: "#323130",
    padding: "5px 8px",
    borderRadius: "5px 0 0 5px",
  },
  fontColor: {
    backgroundColor: "#FFF",
    color: "#000",
    fontSize: "20px",
    fontWeight: "700",
    width: 220,
    padding: 7,
    borderRadius: "0 5px 5px 0",
    outline: "1px solid #FFF",
  },
  textInputSizeContainer: {
    fontFamily: " 'Arial', sans-serif ",
    fontSize: "18px",
    fontWeight: "700",
    color: "#FFF",
  },
}));

const InputDesign = (props) => {
  const classes = useStyles();
  const { inputData, handleInputData} = props;
  return (
    <div className={classes.inputDesignBox}>
    <Typography className={classes.headingContainer}>BARCODE: 22SP02002270000876 </Typography>
      <div className={classes.textInputContainer}>
        <Typography className={classes.textInputTitle}>Start : </Typography>
        <TextField
          name="barcodeStart"
          type="text"
          className={classes.textAreaInput}
          inputProps={{ className: classes.fontColor, maxLength: 18, minLength: 18, max: 18 }}
          value={inputData?.barcodeStart}
          onChange={handleInputData}
          placeholder="22SP02002270000876"
        />
      </div>
      <div className={classes.textInputContainer}>
        <Typography className={classes.textInputTitle}>End : </Typography>
        <TextField
          name="barcodeEnd"
          type="text"
          className={classes.textAreaInput}
          inputProps={{ className: classes.fontColor, maxLength: 18, minLength: 18, max: 18 }}
          value={inputData?.barcodeEnd}
          onChange={handleInputData}
          placeholder="22SP02002270000877"
        />
      </div>
    </div>
  );
};

export default InputDesign;
