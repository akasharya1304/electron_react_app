import { makeStyles } from "@material-ui/core/styles";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import handlePrintPage from "../UI/PAGE_PRINT";
import CamarronDesign from "./camarronDesign";
import handleLegalPagePreview from "./LegalPagePreview";

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
    background: "#FFF",
    height: "14in",
    width: "8.5in",
    // border: "1px solid black",
    paddingTop: "8%",
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
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "0 4%",
    // border: "1px solid red",
    margin: "2% 0",
  },
}));
// 8.26 × 11.69 in
const Content = (props) => {
  const classes = useStyles();
  const componentRef = useRef();

  const { inputData, inputCount } = props;

  const PageCamarron = (props) => {
    const { classes, threeInputData, pageNo } = props;
    let today = new Date();
    let date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    return (
      <div className={classes.PageInnerContainer}>
        <div
          className={classes.headingContainer}
          style={{ opacity: `${1 - pageNo}` }}
        >
          <span className={classes.redHeading}>
            MAIL DATE : {date} (BARCODE STICKER)
          </span>
          <span className={classes.greenHeading}># CAMARRON</span>
        </div>
        <div className={classes.camarronDesignContainer}>
          {[...Array(11).keys()].map((components, index) => {
            return (
              <CamarronDesign
                codigo={threeInputData[0].codigo}
                art={threeInputData[0].art}
                col={threeInputData[0].col}
                size={Number(24) + index}
                barcode={String(Number(threeInputData[0].barcode) + index)}
              />
            );
          })}
        </div>
        {threeInputData[1] && (
          <div className={classes.camarronDesignContainer}>
            {[...Array(11).keys()].map((components, index) => {
              return (
                <CamarronDesign
                  codigo={threeInputData[1].codigo}
                art={threeInputData[1].art}
                col={threeInputData[1].col}
                size={Number(24) + index}
                barcode={String(Number(threeInputData[1].barcode) + index)}
                />
              );
            })}
          </div>
        )}
        {threeInputData[2] && (
          <div className={classes.camarronDesignContainer}>
            {[...Array(11).keys()].map((components, index) => {
              return (
                <CamarronDesign
                 codigo={threeInputData[2].codigo}
                art={threeInputData[2].art}
                col={threeInputData[2].col}
                size={Number(24) + index}
                barcode={String(Number(threeInputData[2].barcode) + index)}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className={classes.contentContainer} ref={componentRef}>
        {[...Array(Math.ceil(inputCount / 3)).keys()].map(
          (components, index) => {
            return (
              <PageCamarron 
              key={index+'pageCamarron'}
              classes={classes} 
              threeInputData={inputData.slice(3*index,3*(index+1))} 
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
            content={() => componentRef.current}
            print={handleLegalPagePreview}
          />
        </div>
      </div>
    </>
  );
};

export default Content;
