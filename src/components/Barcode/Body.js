import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "./content";
import InputPage from "./inputPage";

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-evenly'
    // marginBottom: 80,
  },
  inputContainer: {
    display: "flex",
    width: "30%",
    padding: "1%",
    marginBottom: '5%',
    border: "5px dotted #101d8d",
    backgroundColor: "#0370a3",
  },
  printBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#4472C4",
  },
}));

const Body = () => {
  const classes = useStyles();
  const [inputCount, setInputCount] = useState(1);
  const [inputData, setInputData] = useState([
    {
      codigo: "",
      art: "",
      col: "",
      barcode: "",
    },
  ]);

  const onAddBtnClick = (event) => {
    setInputCount(inputCount + 1);
    setInputData((prevValue) => {
      return [
        ...prevValue,
        {
          codigo: "",
          art: "",
          col: "",
          barcode: "",
        },
      ];
    });
  };
  const onRemoveBtnClick = (indexNo) => {
    setInputCount(inputCount - 1);
    let newData = inputData.splice(indexNo,1)
    let updatedData = inputData.filter(d => d != newData) 
    setInputData(updatedData)
  }

  const handleInputData = (dataValue, name, indexNo) => {
    setInputData(
      inputData.map((data, index) =>
        index === indexNo ? { ...data, [name]: dataValue } : data
      )
    );
  };

  return (
    <div className={classes.bodyContainer}>
      <div className={classes.inputContainer}>
        <InputPage 
          inputData={inputData}
          inputCount={inputCount}
          onAddBtnClick={onAddBtnClick}
          handleInputData={handleInputData}
          onRemoveBtnClick={onRemoveBtnClick}
        />
      </div>
      <div className={classes.printBox}>
        <Content 
          inputData={inputData}
          inputCount={inputCount}
        />
      </div>
    </div>
  );
};

export default Body;
