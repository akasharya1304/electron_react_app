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
  const { inputData, inputBoxNo, handleInputData, onRemoveBtnClick } = props;
  return (
    <div className={classes.inputDesignBox}>
      <div className={classes.textInputContainer}>
        <Typography className={classes.textInputTitle}>CODIGO : </Typography>
        <TextField
          name="codigo"
          type="text"
          onWheel={(e) => e.target.blur()}
          onKeyPress={(event) => {
            if (event.charCode >= 48 && event.charCode <= 57) {
              // let it happen, don't do anything
            } else {
              event.preventDefault();
            }
          }}
          className={classes.textAreaInput}
          inputProps={{ className: classes.fontColor }}
          value={inputData[inputBoxNo]?.codigo}
          onChange={(e) =>
            handleInputData(e.target.value, "codigo", inputBoxNo)
          }
          placeholder=" 134966 "
        />
      </div>
      <div className={classes.textInputContainer}>
        <Typography className={classes.textInputTitle}>ART : </Typography>
        <TextField
          name="art"
          type="text"
          onWheel={(e) => e.target.blur()}
          onKeyPress={(event) => {
            if (event.charCode >= 48 && event.charCode <= 57) {
              // let it happen, don't do anything
            } else {
              event.preventDefault();
            }
          }}
          className={classes.textAreaInput}
          inputProps={{ className: classes.fontColor }}
          value={inputData[inputBoxNo]?.art}
          onChange={(e) => handleInputData(e.target.value, "art", inputBoxNo)}
          placeholder=" 700134145 "
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className={classes.textInputContainer}>
          <Typography className={classes.textInputTitle} style={{ width: 80 }}>
            COL :{" "}
          </Typography>
          <TextField
            name="col"
            type="text"
            onWheel={(e) => e.target.blur()}
            onKeyPress={(event) => {
              if (event.charCode >= 48 && event.charCode <= 57) {
                // let it happen, don't do anything
              } else {
                event.preventDefault();
              }
            }}
            className={classes.textAreaInput}
            inputProps={{ className: classes.fontColor, style: { width: 60 } }}
            value={inputData[inputBoxNo]?.col}
            onChange={(e) => handleInputData(e.target.value, "col", inputBoxNo)}
            placeholder=" 601 "
          />
        </div>
        <div className={classes.textInputContainer}>
          <Typography className={classes.textInputSizeContainer}>
            SIZE/TALLA : 24
          </Typography>
        </div>
      </div>
      <div className={classes.textInputContainer}>
        <Typography className={classes.textInputTitle}>BARCODE : </Typography>
        <TextField
          name="barcode"
          type="text"
          onWheel={(e) => e.target.blur()}
          onKeyPress={(event) => {
            if (event.charCode >= 48 && event.charCode <= 57) {
              // let it happen, don't do anything
            } else {
              event.preventDefault();
            }
          }}
          className={classes.textAreaInput}
          inputProps={{
            className: classes.fontColor,
            maxLength: 12,
            minLength: 12,
            max: 12,
          }}
          value={inputData[inputBoxNo]?.barcode}
          onChange={(e) =>
            handleInputData(e.target.value, "barcode", inputBoxNo)
          }
          placeholder=" 843462090340 "
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          marginTop: 10,
        }}
      >
        <IconButton
          style={{
            // backgroundColor: "#009100",
            color: "#FFF",
          }}
          onClick={() => onRemoveBtnClick(inputBoxNo)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default InputDesign;
