import { makeStyles } from "@material-ui/core/styles";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import handlePreviewPage from "../UI/PAGE_PREVIEW";
import handlePrintPage from "../UI/PAGE_PRINT";
import NakdDesign from "./NakdDesign";
import "./nakd.module.css"

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    // width: '70%',
    width: "205mm",
    // border: "1px solid blue",
    padding: "0",
    // margin: "0 auto 5% auto",
    alignContent: "center",
    justifyContent: "center",
  },
  PageInnerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#FFF",
    height: "290mm",
    // height: "11.69in",
    width: "205mm",
    // width: "8.26in",
    // padding: "2mm 0 0 5mm",
    // margin: "0",
    // margin: '81px auto',
    // border: "1px solid black",
  },
}));
// 8.26 × 11.69 in
const Content = (props) => {
  const classes = useStyles();
  const componentRef = useRef();

  const OnePageComponent = (props) => {
    return (
      <div className={classes.PageInnerContainer} id="nakdPage">
        <NakdDesign {...props} articleLastNumber={props.articleLastNumber} />
        <NakdDesign {...props} articleLastNumber={props.articleLastNumber} />
      </div>
      // </>
    );
  };

  return (
    <>
      <div className={classes.contentContainer} ref={componentRef}>
        {[...Array(Number(props.articlePageNumber["_579"])).keys()].map(
          (components, index) => {
            return <OnePageComponent {...props} articleLastNumber="579" />;
          }
        )}
        {[...Array(Number(props.articlePageNumber["_580"])).keys()].map(
          (components, index) => {
            return <OnePageComponent {...props} articleLastNumber="580" />;
          }
        )}
        {[...Array(Number(props.articlePageNumber["_581"])).keys()].map(
          (components, index) => {
            return <OnePageComponent {...props} articleLastNumber="581" />;
          }
        )}
        {[...Array(Number(props.articlePageNumber["_582"])).keys()].map(
          (components, index) => {
            return <OnePageComponent {...props} articleLastNumber="582" />;
          }
        )}
        {[...Array(Number(props.articlePageNumber["_583"])).keys()].map(
          (components, index) => {
            return <OnePageComponent {...props} articleLastNumber="583" />;
          }
        )}
        {[...Array(Number(props.articlePageNumber["_584"])).keys()].map(
          (components, index) => {
            return <OnePageComponent {...props} articleLastNumber="584" />;
          }
        )}
        {[...Array(Number(props.articlePageNumber["_659"])).keys()].map(
          (components, index) => {
            return <OnePageComponent {...props} articleLastNumber="659" />;
          }
        )}
        {[...Array(Number(props.articlePageNumber["_769"])).keys()].map(
          (components, index) => {
            return <OnePageComponent {...props} articleLastNumber="769" />;
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
              <button className="printButton">Print - Page</button>
            )}
            pageStyle='@page { size: 205mm 281.5mm }'
            content={() => componentRef.current}
            print={handlePrintPage}
          />
          <ReactToPrint
            xs={8}
            trigger={() => (
              <button className="printButton">Preview - Page</button>
            )}
            pageStyle={`@page { size: 205mm 290mm; margin: 0 }`}
            content={() => componentRef.current}
            print={handlePreviewPage}
          />
        </div>
      </div>
    </>
  );
};

export default Content;
