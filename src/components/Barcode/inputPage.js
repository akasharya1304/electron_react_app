import InputDesign from "./inputDesign";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles((theme) => ({
  inputPageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
}));

const InputPage = (props) => {
  const classes = useStyles();
  const { inputCount, inputData, handleInputData, onAddBtnClick, onRemoveBtnClick } = props;

  return (
    <div className={classes.inputPageContainer}>
      {[...Array(inputCount).keys()].map((components, index) => {
        return (
          <InputDesign
            key={index + "inputDesign"}
            inputData={inputData}
            inputBoxNo={index}
            handleInputData={handleInputData}
            onRemoveBtnClick={onRemoveBtnClick}
          />
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Fab color="primary" aria-label="add" onClick={onAddBtnClick}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default InputPage;
