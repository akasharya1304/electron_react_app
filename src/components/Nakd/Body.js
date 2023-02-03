import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Content from "./content";
import InputPage from "./InputPage";

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    display: "flex",
    marginBottom: 80,
  },
  printBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#4472C4",
  },
}));

let Body = () => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState({
    poNumber: "",
    articleNumber: "",
    styleName: "",
    colour: "",
  });

  const [articlePageNumber, setArticlePageNumber] = useState({
    _579: "",
    _580: "",
    _581: "",
    _582: "",
    _583: "",
    _584: "",
    _659: "",
    _769: "",
  });

  const [sizeQty, setSizeQty] = useState("eu44");
  const [styleNameScaleX, setStyleNameScaleX] = useState("");

  const handlestyleScaleX = (e) => {
    setStyleNameScaleX(e.target.value);
  };

  const handleTextArea = (e) => {
    const { name, value } = e.target;
    setInputValue((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const resetInputValue = () => {
    setInputValue({
      poNumber: "",
      articleNumber: "",
      styleName: "",
      colour: "",
    });
    setStyleNameScaleX("")
  };
  const handleArticlePageNumber = (e) => {
    const { name, value } = e.target;
    setArticlePageNumber((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const resetArticlePageNumber = () => {
    setArticlePageNumber({
      _579: "",
      _580: "",
      _581: "",
      _582: "",
      _583: "",
      _584: "",
      _659: "",
      _769: "",
    });
  };


  const handleSizeQty = (e) => {
    const { value } = e.target;
    console.log(value);
    setSizeQty(value);
  };

  return (
    <div>
      <div className={classes.inputContainer}>
        <InputPage
          handleTextArea={handleTextArea}
          handleSizeQty={handleSizeQty}
          handleArticlePageNumber={handleArticlePageNumber}
          resetInputValue={resetInputValue}
          resetArticlePageNumber={resetArticlePageNumber}
          handlestyleScaleX={handlestyleScaleX}
          inputValue={inputValue}
          sizeQty={sizeQty}
          articlePageNumber={articlePageNumber}
          styleNameScaleX={styleNameScaleX}
        />
      </div>
      <div className={classes.printBox}>
        <Content
          inputValue={inputValue}
          sizeQty={sizeQty}
          articlePageNumber={articlePageNumber}
          styleNameScaleX={styleNameScaleX}
        />
      </div>
    </div>
  );
};

export default Body;
