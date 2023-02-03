import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "145mm",
    width: "200mm",
    // border: "1px solid brown",
  },
  nakdBoxContainer: {
    display: "flex",
    height: "132.1mm",
    width: "192.82mm",
    border: "1.5pt solid black",
  },
  nakdBoxleftContainer: {
    display: "flex",
    flexDirection: "column",
  },
  nakdBoxleftInnerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "14.7mm",
    width: "60.2mm",
    outline: "0.5pt solid black",
  },
  leftTitleText: {
    fontFamily: " 'Arial', sans-serif ",
    fontSize: "21.481pt",
    fontWeight: "750",
    paddingLeft: 10,
  },
  nakdBoxRightContainer: {
    display: "flex",
    flexDirection: "column",
  },
  nakdBoxRightInnerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "14.7mm",
    width: "132.6mm",
    outline: "0.5pt solid black",
  },
  rightTitleText: {
    fontFamily: " 'Arial', sans-serif ",
    fontSize: "21.481pt",
    fontWeight: "750",
  },
  rightSizeContainer: {
    display: "flex",
    alignItems: "center",
    alignContent: "flex-start",
  },
  rightSizeBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "14.7mm",
    outline: "0.5pt solid black",
  },
  rightSizeTitleText: {
    fontFamily: " 'Arial', sans-serif ",
    fontSize: "10.481pt",
    transform: "scale(1,2)", // scale(along x-axis , along y-axis)
    fontWeight: "700",
  },
}));

const NakdDesign = (props) => {
  const classes = useStyles();
  const SizeQty = props.sizeQty;

  const RightSizeBox = (props) => {
    return (
      <div
        className={classes.rightSizeBox}
        style={{ width: SizeQty == "eu46" ? "16.575mm" : "18.93mm" }}
      >
        <Typography className={classes.rightSizeTitleText}>
          {props.sizeText}
        </Typography>
      </div>
    );
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.nakdBoxContainer}>
        <div className={classes.nakdBoxleftContainer}>
          <div className={classes.nakdBoxleftInnerContainer}>
            <Typography
              className={classes.leftTitleText}
              style={{ transform: "scale(1,1.4)" }}
            >
              Carton Number
            </Typography>
          </div>
          <div className={classes.nakdBoxleftInnerContainer}>
            <Typography
              className={classes.leftTitleText}
              style={{ fontSize: "26.481pt" }}
            >
              PO Number
            </Typography>
          </div>
          <div className={classes.nakdBoxleftInnerContainer}>
            <Typography
              className={classes.leftTitleText}
              style={{ fontSize: "26.481pt" }}
            >
              Style Name
            </Typography>
          </div>
          <div className={classes.nakdBoxleftInnerContainer}>
            <Typography
              className={classes.leftTitleText}
              style={{ transform: "scale(1,1.4)" }}
            >
              Article Number
            </Typography>
          </div>
          <div className={classes.nakdBoxleftInnerContainer}>
            <Typography
              className={classes.leftTitleText}
              style={{ fontSize: "26.481pt" }}
            >
              Size / Qty
            </Typography>
          </div>
          <div className={classes.nakdBoxleftInnerContainer}></div>
          <div className={classes.nakdBoxleftInnerContainer}>
            <Typography
              className={classes.leftTitleText}
              style={{ fontSize: "26.481pt" }}
            >
              Colour
            </Typography>
          </div>
          <div className={classes.nakdBoxleftInnerContainer}>
            <Typography
              className={classes.leftTitleText}
              style={{ fontSize: "13.481pt", transform: "scale(1,2)" }}
            >
              Gross Weight(kg/Carton)
            </Typography>
          </div>
          <div className={classes.nakdBoxleftInnerContainer}>
            <Typography
              className={classes.leftTitleText}
              style={{ fontSize: "14.481pt", transform: "scale(1,1.8)" }}
            >
              Volume L x W x H (cm)
            </Typography>
          </div>
        </div>
        <div className={classes.nakdBoxRightContainer}>
          <div className={classes.nakdBoxRightInnerContainer}>
            <Typography
              className={classes.rightTitleText}
              style={{ marginLeft: 50 }}
            >
              /
            </Typography>
          </div>
          <div className={classes.nakdBoxRightInnerContainer}>
            <Typography
              className={classes.rightTitleText}
              style={{ fontSize: "31.481pt" }}
            >
              {props.inputValue.poNumber}
            </Typography>
          </div>
          <div className={classes.nakdBoxRightInnerContainer}>
            <Typography
              className={classes.rightTitleText}
              style={{
                display: 'flex',
                flexShrink: 0,
                fontSize: "25.481pt",
                transform: `scale(${
                  props.styleNameScaleX == "" ? "1" : props.styleNameScaleX
                },1.2)`,
              }}
            >
              {props.inputValue.styleName}
            </Typography>
          </div>
          <div className={classes.nakdBoxRightInnerContainer}>
            <Typography
              className={classes.rightTitleText}
              style={{
                fontSize: "25.481pt",
                transform: "scale(1.2,1.2)",
                fontWeight: 550,
              }}
            >
              {props.inputValue.articleNumber.replace(
                "579",
                props.articleLastNumber
              )}
            </Typography>
          </div>
          <div className={classes.nakdBoxRightInnerContainer}>
            <div className={classes.rightSizeContainer}>
              <RightSizeBox sizeText="EU32" />
              <RightSizeBox sizeText="EU34" />
              <RightSizeBox sizeText="EU36" />
              <RightSizeBox sizeText="EU38" />
              <RightSizeBox sizeText="EU40" />
              <RightSizeBox sizeText="EU42" />
              <RightSizeBox sizeText="EU44" />
              {SizeQty === "eu46" && <RightSizeBox sizeText="EU46" />}
            </div>
          </div>
          <div className={classes.nakdBoxRightInnerContainer}>
            <div className={classes.rightSizeContainer}>
              <RightSizeBox sizeText="" />
              <RightSizeBox sizeText="" />
              <RightSizeBox sizeText="" />
              <RightSizeBox sizeText="" />
              <RightSizeBox sizeText="" />
              <RightSizeBox sizeText="" />
              <RightSizeBox sizeText="" />
              {SizeQty === "eu46" && <RightSizeBox sizeText="" />}
            </div>
          </div>
          <div className={classes.nakdBoxRightInnerContainer}>
            <Typography
              className={classes.rightTitleText}
              style={{ fontSize: "29pt" }}
            >
              {props.inputValue.colour}
            </Typography>
          </div>
          <div className={classes.nakdBoxRightInnerContainer}>
            <Typography
              className={classes.rightTitleText}
              style={{
                marginLeft: 150,
                fontSize: "26.481pt",
                transform: "scale(1,1)",
              }}
            >
              KGS
            </Typography>
          </div>
          <div className={classes.nakdBoxRightInnerContainer}>
            <Typography
              className={classes.rightTitleText}
              style={{ marginRight: 60 }}
            >
              x
            </Typography>
            <Typography
              className={classes.rightTitleText}
              style={{ marginLeft: 60 }}
            >
              x
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NakdDesign;
