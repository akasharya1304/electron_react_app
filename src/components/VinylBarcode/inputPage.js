import InputDesign from "./inputDesign";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inputPageContainer: {
    display: "flex",
    justifyContent: 'center'
  },
}));

const InputPage = (props) => {
  const classes = useStyles();
  const {
    inputCount,
    inputData,
    handleInputData,
  } = props;

  return (
    <div className={classes.inputPageContainer}>
      <InputDesign
        inputData={inputData}
        handleInputData={handleInputData}
      />
    </div>
  );
};

export default InputPage;
