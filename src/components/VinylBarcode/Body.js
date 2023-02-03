import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "./content";
import InputPage from "./inputPage";

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#4472C4"
    // marginBottom: 80,
  },
  inputContainer: {
    display: "flex",
    width: "40%",
    padding: "1%",
    marginBottom: "5%",
    border: "5px dotted #101d8d",
    backgroundColor: "#0370a3",
    justifyContent: "center",
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
  const [inputCount, setInputCount] = useState(0);
  const [inputData, setInputData] = useState({
    barcodeStart: "",
    barcodeEnd: "",
  });

  useEffect(() => {
    if (
      inputData.barcodeEnd.length >= 18 &&
      inputData.barcodeStart.length >= 18
    ) {
      console.log(
        Number(inputData.barcodeEnd.slice(9)) -
          Number(inputData.barcodeStart.slice(9))
      );
      setInputCount(
        Number(inputData.barcodeEnd.slice(9)) -
          Number(inputData.barcodeStart.slice(9)) +
          1
      );
    }
  }, [inputData]);

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setInputData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <div className={classes.bodyContainer}>
      <div className={classes.inputContainer}>
        <InputPage
          inputData={inputData}
          inputCount={inputCount}
          handleInputData={handleInputData}
        />
      </div>
      {inputCount > 0 && (
        <div className={classes.printBox}>
          <Content inputData={inputData} inputCount={inputCount} />
        </div>
      )}
    </div>
  );
};

export default Body;
