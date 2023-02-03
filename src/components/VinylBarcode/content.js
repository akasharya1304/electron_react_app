import { makeStyles } from "@material-ui/core/styles";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import handlePrintPage from "../UI/PAGE_PRINT";
import VinylBarcodeDesign from "./vinylBarcodeDesign";
import handleSuperBPagePreview from "./SuperBPagePreview";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0",
  },
  PageInnerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: '1% auto',
    background: "#FFF",
    height: "19in",
    width: "13in",
    // border: '1px solid brown'
  },
  headingContainer: {
    fontSize: "16pt",
    fontWeight: "700",
    width: "100%",
    paddingLeft: "12%",
  },
  redHeading: {
    color: "#FF0000",
    marginRight: 10,
  },
  greenHeading: {
    color: "#009100",
  },
  camarronDesignContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: '12in',
    // height: '18.9in',
    justifyContent: 'flex-start'
  },
}));
// 8.26 × 11.69 in
const Content = (props) => {
  const classes = useStyles();
  const componentRef = useRef();

  const { inputData, inputCount } = props;
  console.log(inputData, inputCount);

  const VinylBarcode = (props) => {
    const { classes, inputNo, inputData, pageNo } = props;
    console.log(inputNo)
    return (
      <div className={classes.PageInnerContainer}>
        <div className={classes.camarronDesignContainer}>
          {[...Array(inputNo).keys()].map((components, index) => {
            return (
              <VinylBarcodeDesign
                key={index + "vinylcode"}
                barcode={String(
                  String(inputData.barcodeStart.slice(0, 9)) +
                    String(
                      Number(inputData.barcodeStart.slice(9)) + Number((24 * pageNo ) + Number(index)) 
                    )
                )}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={classes.contentContainer} ref={componentRef}>
        {[...Array(Math.ceil(inputCount / 24)).keys()].map(
          (components, index) => {
            return (
              <VinylBarcode
                key={index + "vinylBarcode"}
                classes={classes}
                inputNo={
                  Math.ceil((inputCount / (24 * (index + 1)))) > 1
                    ? 24
                    : inputCount - 24 * index
                }
                inputData={inputData}
                pageNo={index}
              />
            );
          }
        )}
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <ReactToPrint
            xs={8}
            trigger={() => (
              <button className="printButton">Preview - Page</button>
            )}
            pageStyle={`@page { size: 13in 19in; margin: 0 }`}
            content={() => componentRef.current}
            print={handleSuperBPagePreview}
          />
        </div>
      </div>
    </>
  );
};

export default Content;
