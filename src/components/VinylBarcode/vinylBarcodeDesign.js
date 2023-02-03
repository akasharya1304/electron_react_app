import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import JsBarcode from "jsbarcode";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  Box: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid black",
    height: "2.325in",
    width: "3.937in",
    margin: 2,
  },
  UpperContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "1.807in",
    width: "3.937in",
    // border: "1px solid red",
  },
  barcodeContainer: {
    height: "1.807in",
    width: "3.930in",
    // border: "1px solid black",
  },
  LowerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "0.318in",
    width: "3.937in",
    // border: "1px solid orange",
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    bottom: 10,
    fontSize: "20pt",
    height: "0.318in",
    fontWeight: "600",
    fontFamily: " 'Calibri', sans-serif ",
    transform: "scale(1.2,1.1)",
  },
}));

const VinylBarcodeDesign = (props) => {
  const classes = useStyles();
  const [barcodeData, setBarcodeData] = useState([]);

  const textToBarCode = (text) => {
    let canvas = document.createElement("canvas");
    JsBarcode(canvas, text, {
      format: "CODE128",
      displayValue: false,
      font: "Arial",
    });
    console.log(canvas.toDataURL("image/png"));
    setBarcodeData((prevValue) => {
      return [
        ...prevValue,
        {
          text: text,
          barcodeUrl: canvas.toDataURL("image/png"),
        },
      ];
    });
    return canvas.toDataURL("image/png");
  };

  useEffect(() => {
    if ((props?.barcode).length === 18) {
      textToBarCode(`${props?.barcode}`);
    }
  }, [props?.barcode]);

  console.log(barcodeData);

  return (
    <div className={classes.Box}>
      <div className={classes.UpperContainer}>
        <img
          className={classes.barcodeContainer}
          src={
            barcodeData.find((d) => d.text === `${props?.barcode}`)?.barcodeUrl
          }
        />
      </div>
      <div className={classes.LowerContainer}>
        <Typography className={classes.textContainer}>
          {barcodeData.find((d) => d.text === `${props?.barcode}`)?.text}
        </Typography>
      </div>
    </div>
  );
};

export default VinylBarcodeDesign;
