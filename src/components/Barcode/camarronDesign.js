import { makeStyles } from "@material-ui/core/styles";
import JsBarcode from "jsbarcode";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  Box: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid pink",
    height: "34.30mm",
    width: "49.30mm",
  },
  titleHead: {
    fontSize: "12px",
    color: "#FF0000",
    fontWeight: "700",
    opacity: 0,
    // border: "1px solid blue",
  },
  leftBoxContainer: {
    display: "flex",
    flexDirection: "row",
  },
  outerContainer: {
    display: "flex",
    flexDirection: "column",
    height: "30mm",
    width: "45mm",
    border: ".75pt solid black",
    borderRadius: 5,
  },
  upperContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "14.44mm",
    // border: "1px solid blue",
  },
  textContainer: {
    height: "11.447mm",
    width: "36.345mm",
    // border: "1px solid black",
  },
  lowerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "15.56mm",
    // border: "1px solid orange",
  },
  barcodeContainer: {
    height: "12.620mm",
    width: "37.33mm",
    marginRight: 5,
    // border: "1px solid black",
  },
  textUpperContainer: {
    display: "flex",
    flexDirection: "row",
    fontSize: "7.243pt",
    fontFamily: " 'Calibri', sans-serif ",
  },
  textMiddleContainer: {
    display: "flex",
    flexDirection: "row",
    fontSize: "8pt",
    fontWeight: "700",
    fontFamily: " 'Calibri', sans-serif ",
  },
  textLowerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "7.243pt",
    fontFamily: " 'Calibri', sans-serif ",
    padding: "2px 0",
  },
}));

const CamarronDesign = (props) => {
  const classes = useStyles();
  const [barcodeData, setBarcodeData] = useState([]);

  const textToBarCode = (text) => {
    let canvas = document.createElement("canvas");
    JsBarcode(canvas, text, {
      format: "EAN13",
      // font: "OCRB",
      font: "monospace",
      textAlign: "center",
      fontOptions: "bold",
      textMargin: -1,
      height: 45,
      fontSize: "80pt",
      marginleft: 60,
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
    if ((props?.barcode).length === 12) {
      textToBarCode(`${props?.barcode}`);
    }
  }, [props?.barcode]);

  console.log(barcodeData);

  return (
    <div className={classes.Box}>
      <div
        className={classes.titleHead}
        style={{
          textAlign: "center",
          opacity: props.size === 24 && 1,
        }}
      >
        <span>1.772 "</span>
      </div>
      <div
        className={classes.leftBoxContainer}
        style={{ position: "relative", justifyContent: "flex-end" }}
      >
        <div
          className={classes.titleHead}
          style={{
            position: "absolute",
            top: "21mm",
            left: -2,
            transformOrigin: "0 0",
            transform: "rotate(-90deg)",
            opacity: props.size === 24 && 1,
          }}
        >
          1.181 "
        </div>
        <div className={classes.outerContainer}>
          <div className={classes.upperContainer}>
            <div className={classes.textContainer}>
              <div className={classes.textUpperContainer}>
                <span
                  style={{ fontSize: "8pt", wordSpacing: 1.2, fontWeight: 500 }}
                >
                  CODIGO{" "}
                </span>
                <span style={{ fontWeight: 800, margin: "0 8px" }}>:</span>
                <span>{props.codigo}</span>
              </div>
              <div className={classes.textMiddleContainer}>
                <span>ART </span>
                <span style={{ fontWeight: 800, margin: "0 10px 0 26px" }}>
                  :
                </span>
                <span style={{ transform: "scale(1.1,1)" }}>{props.art}</span>
              </div>
              <div className={classes.textLowerContainer}>
                <div>
                  <span>COL</span>
                  <span style={{ fontWeight: 600, margin: "0 8px 0 2px" }}>
                    :
                  </span>
                  <span>{props.col}</span>
                </div>
                <div>
                  <span>SIZE/TALLA</span>
                  <span style={{ fontWeight: 600, margin: "0 8px 0 2px" }}>
                    :
                  </span>
                  <span>{props.size}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.lowerContainer}>
            <img
              className={classes.barcodeContainer}
              src={
                barcodeData.find((d) => d.text === `${props?.barcode}`)
                  ?.barcodeUrl
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamarronDesign;
