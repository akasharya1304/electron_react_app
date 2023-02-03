import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  inputBoxContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0",
    width: "100%",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 60,
    marginBottom: 20,
  },
  reloadButton: {
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    margin: "0 3%",
    transform: "scale(1.2)",

    "&:hover": {
      color: "red",
      backgroundColor: "#4472C4",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: " 'Arial', sans-serif ",
    fontSize: "48px",
    fontWeight: "700",
    color: "#dd7724",
    margin: "1% 0",
    width: 1150,
  },
  textArea: {
    display: "flex",
    flexDirection: "row",
    width: "95%",
    padding: "1%",
    border: "5px dotted #101d8d",
    backgroundColor: "#0370a3",
  },
  textAreaLeftContainer: {
    display: "flex",
    flexDirection: "column",
  },
  textAreaRightContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textAreaRightLastContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "center",
    width: 200,
    marginTop: 50,
  },
  textAreaContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 750,
    padding: 5,
    margin: "15px 2px",
  },
  textInputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  articleInputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  SizeQtyLabel: {
    fontFamily: " 'Arial', sans-serif ",
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: 10,
    color: "#FFF !important",
  },
  formLabel: {
    fontFamily: " 'Arial', sans-serif !important",
    fontSize: "18px !important",
    fontWeight: "900 !important",
    color: "#FFF",
  },
  textInputTitle: {
    display: "flex",
    fontFamily: " 'Arial', sans-serif ",
    fontSize: "20px",
    fontWeight: "700",
    color: "#FFF",
    width: 150,
    backgroundColor: "#c40a0a",
    padding: 16,
    borderRadius: "5px 0 0 5px",
  },
  fontColor: {
    backgroundColor: "#FFF",
    color: "#000",
    fontSize: "24px",
    fontWeight: "700",
    width: 400,
    padding: "16px 10px",
    borderRadius: "0 5px 5px 0",
    outline: "1px solid #FFF",
  },
  total: {
    fontFamily: " 'Arial', sans-serif ",
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: 10,
    color: "#ddd",
  },
}));

let InputPage = (props) => {
  const classes = useStyles();

  function refreshPage() {
    window.location.reload();
  }

  const ArticlePage = (props) => {
    return (
      <div
        className={classes.textInputContainer}
        style={{ margin: "10px 40px" }}
      >
        <Typography
          className={classes.textInputTitle}
          style={{
            justifyContent: "center",
            backgroundColor: "#323130",
            fontSize: "16px",
            padding: 8,
            width: 40,
          }}
        >
          {props.articleNumber}
        </Typography>
        <TextField
          name={"_" + props.articleNumber}
          type="text"
          onWheel={(e) => e.target.blur()}
          onKeyPress={(event) => {
            if (event.charCode >= 48 && event.charCode <= 57) {
              // let it happen, don't do anything
            } else {
              event.preventDefault();
            }
          }}
          value={props.articlePageNumber["_" + props.articleNumber]}
          inputProps={{
            className: classes.fontColor,
            style: { width: 50, fontSize: "20px", padding: 7 },
          }}
          onChange={(e) => props.handleArticlePageNumber(e)}
          placeholder="Pages"
        />
      </div>
    );
  };

  return (
    <div className={classes.inputBoxContainer}>
      <div className={classes.titleContainer}>
        <Button
          variant="text"
          className={classes.reloadButton}
          onClick={refreshPage}
        >
          <RefreshRoundedIcon />
        </Button>
        <Typography className={classes.title}>PUT INPUT HERE</Typography>
      </div>
      <div className={classes.textArea}>
        <div className={classes.textAreaLeftContainer}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: 10,
            }}
          >
            <Button
              variant="text"
              className={classes.reloadButton}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              onClick={props.resetInputValue}
            >
              <RefreshRoundedIcon />
            </Button>
          </div>
          <div className={classes.textAreaContainer}>
            <div className={classes.textInputContainer}>
              <Typography className={classes.textInputTitle}>
                PO Number
              </Typography>
              <TextField
                name="poNumber"
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
                value={props.inputValue.poNumber}
                onChange={props.handleTextArea}
                placeholder=" 294410 "
              />
            </div>
          </div>
          <div className={classes.textAreaContainer}>
            <div className={classes.textInputContainer}>
              <Typography className={classes.textInputTitle}>
                Article Number
              </Typography>
              <TextField
                name="articleNumber"
                type="text"
                className={classes.textAreaInput}
                inputProps={{
                  className: classes.fontColor,
                }}
                value={props.inputValue.articleNumber}
                onChange={props.handleTextArea}
                placeholder="1812-000016-0001-579"
              />
            </div>
          </div>
          <div className={classes.textAreaContainer}>
            <div className={classes.textInputContainer}>
              <Typography className={classes.textInputTitle}>
                Style Name
              </Typography>
              <TextField
                name="styleName"
                type="text"
                className={classes.textAreaInput}
                inputProps={{
                  className: classes.fontColor,
                  style: { width: 400 },
                }}
                value={props.inputValue.styleName}
                onChange={props.handleTextArea}
                placeholder="One Shoulder Tie Detail Dress"
              />
              <div>
                <div
                  className={classes.textInputContainer}
                  style={{ margin: "5px" }}
                >
                  <Typography
                    className={classes.textInputTitle}
                    style={{
                      justifyContent: "center",
                      backgroundColor: "#323130",
                      fontSize: "14px",
                      padding: 8,
                      width: 60,
                    }}
                  >
                    Scale X
                  </Typography>
                  <TextField
                    type="number"
                    onWheel={(e) => e.target.blur()}
                    value={props.styleNameScaleX}
                    inputProps={{
                      className: classes.fontColor,
                      style: { width: 50, fontSize: "20px", padding: 7 },
                    }}
                    onChange={(e) => props.handlestyleScaleX(e)}
                    placeholder="1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.textAreaContainer}>
            <div className={classes.textInputContainer}>
              <Typography className={classes.textInputTitle}>Colour</Typography>
              <TextField
                name="colour"
                type="text"
                className={classes.textAreaInput}
                inputProps={{ className: classes.fontColor }}
                value={props.inputValue.colour}
                onChange={props.handleTextArea}
                placeholder="Black"
              />
            </div>
          </div>
        </div>
        <Divider orientation="vertical" style={{ width: 10 }} />
        <div className={classes.textAreaRightContainer}>
          <Button
            variant="text"
            className={classes.reloadButton}
            style={{ width: "50%", justifyContent: "center" }}
            onClick={props.resetArticlePageNumber}
          >
            <RefreshRoundedIcon />
          </Button>
          {ArticlePage({
            articleNumber: "579",
            handleArticlePageNumber: props.handleArticlePageNumber,
            articlePageNumber: props.articlePageNumber,
          })}
          {ArticlePage({
            articleNumber: "580",
            handleArticlePageNumber: props.handleArticlePageNumber,
            articlePageNumber: props.articlePageNumber,
          })}
          {ArticlePage({
            articleNumber: "581",
            handleArticlePageNumber: props.handleArticlePageNumber,
            articlePageNumber: props.articlePageNumber,
          })}
          {ArticlePage({
            articleNumber: "582",
            handleArticlePageNumber: props.handleArticlePageNumber,
            articlePageNumber: props.articlePageNumber,
          })}
          {ArticlePage({
            articleNumber: "583",
            handleArticlePageNumber: props.handleArticlePageNumber,
            articlePageNumber: props.articlePageNumber,
          })}
          {ArticlePage({
            articleNumber: "584",
            handleArticlePageNumber: props.handleArticlePageNumber,
            articlePageNumber: props.articlePageNumber,
          })}
          {ArticlePage({
            articleNumber: "659",
            handleArticlePageNumber: props.handleArticlePageNumber,
            articlePageNumber: props.articlePageNumber,
          })}
          {props.sizeQty === "eu46" &&
            ArticlePage({
              articleNumber: "769",
              handleArticlePageNumber: props.handleArticlePageNumber,
              articlePageNumber: props.articlePageNumber,
            })}
          <Typography className={classes.total}>
            Total Page:
            <em>
              {Number(props.articlePageNumber["_579"]) +
                Number(props.articlePageNumber["_580"]) +
                Number(props.articlePageNumber["_581"]) +
                Number(props.articlePageNumber["_582"]) +
                Number(props.articlePageNumber["_583"]) +
                Number(props.articlePageNumber["_584"]) +
                Number(props.articlePageNumber["_659"]) +
                Number(props.articlePageNumber["_769"])}
            </em>
          </Typography>
        </div>
        <Divider orientation="vertical" style={{ width: 10 }} />
        <div className={classes.textAreaRightLastContainer}>
          <div className={classes.textInputContainer}>
            <FormControl
              style={{
                outline: "10px solid #323130",
                borderRadius: 15,
                padding: 10,
              }}
            >
              <FormLabel
                id="demo-radio-buttons-group-label"
                className={classes.SizeQtyLabel}
              >
                Size/Qty
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="eu44"
                name="radio-buttons-group"
                onChange={(e) => props.handleSizeQty(e)}
              >
                <FormControlLabel
                  className={classes.formLabel}
                  value="eu44"
                  control={<Radio />}
                  label="EU44"
                />
                <FormControlLabel
                  className={classes.formLabel}
                  value="eu46"
                  control={<Radio />}
                  label="EU46"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <Divider orientation="vertical" style={{ width: 10 }} />
      </div>
    </div>
  );
};

export default InputPage;
