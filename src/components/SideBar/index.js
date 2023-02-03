import { React, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, IconButton, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AutofpsSelectIcon from "@mui/icons-material/AutofpsSelect";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import VerticalShadesClosedOutlinedIcon from '@mui/icons-material/VerticalShadesClosedOutlined';


const useStyles = makeStyles((theme) => ({
  sideBarContainer: {
    display: "flex",
    displayPrint: "none",
    flexDirection: "column",
    position: "fixed",
    left: "0",
    top: "0",
    padding: "2% 1%",
    height: "100%",
    width: "65px",
    backgroundColor: "#022d75",
    zIndex: "100",
    color: "#FFF",
  },
  iconContainer: {
    display: "flex",
    displayPrint: "none",
    justifyContent: "space-evenly",
    margin: "20px 0",
  },
  tooltip: {
    fontSize: "16px",
    fontWeight: "600",
  },

  icon: {
    display: "flex",
    displayPrint: "none",
    color: "#2368E0",
    // width: "50px",
    // height: "65px",
    width: '.1em',
    height: '.1em',
    transform: "scale(1.6)",
  },
}));

let SideBar = (props) => {
  const classes = useStyles();

  let buttonClicked = props.buttonClickedName;

  useEffect(() => {
    buttonClicked !== "Home"
      ? buttonClicked === "handleJdPrintButton()"
        ? handleButtonClick("jdPrintButton")
        : handleButtonClick("artworkMakerButton")
      : handleButtonClick("homeButton");
  }, [buttonClicked]);

  const [buttons, setButtons] = useState("homeButton")

  const handleButtonClick = (button) => {
    setButtons(button)
  }



  const SidebarComponent = (props) => {
		let Icon = props.icon
		// let classes = props.classes
    
    return (
      <Grid item container className={classes.iconContainer}>
        <Tooltip
          title={<span className={classes.tooltip}>{props.tooltipTitle}</span>}
          placement="right-start"
          arrow
        >
          <IconButton
            onClick={() => handleButtonClick(props.clickedButton)}
            component={Link}
            to={props.path}
            sx={{ displayPrint: "none" }}
            className={classes.icon}
            style={{
              color: buttons === props.clickedButton && "#FFF",
            }}
          >
          {Icon}
          </IconButton>
        </Tooltip>
      </Grid>
    );
  };

  return (
    <Grid
      container
      className={classes.sideBarContainer}
      sx={{ displayPrint: "none" }}
    >
      <SidebarComponent
				classes={classes}
				tooltipTitle="Home"
				path="/"
				icon={<HomeRoundedIcon />}
				clickedButton="homeButton"
			/>
      <Divider  style={{ margin: '2% 0', height: 4, color: '#FFF' }} />
			<SidebarComponent
				classes={classes}
				tooltipTitle="Artwork"
				path="/artworkMaker"
				icon={<AutofpsSelectIcon />}
				clickedButton="artworkMakerButton"
			/>
			<SidebarComponent
				classes={classes}
				tooltipTitle="JD Print"
				path="/jdPrint"
				icon={<PrintRoundedIcon />}
				clickedButton="jdPrintButton"
			/>
			<SidebarComponent
				classes={classes}
				tooltipTitle="Pratibha Artwork"
				path="/pratibhaArtwork"
				icon={<ApartmentIcon />}
				clickedButton="pratibhaArtwork"
			/>
			<SidebarComponent
				classes={classes}
				tooltipTitle="Pratibha Print"
				path="/pratibhaPrint"
				icon={<AdfScannerIcon />}
				clickedButton="printPratibhaButton"
			/>
			<SidebarComponent
				classes={classes}
				tooltipTitle="Nakd"
				path="/nakd"
				icon={<VerticalSplitIcon />}
				clickedButton="nakdButton"
			/>
			<SidebarComponent
				classes={classes}
				tooltipTitle="Barcode Sticker"
				path="/barcode"
				icon={<QrCodeScannerIcon />}
				clickedButton="barcodeButton"
			/>
			<SidebarComponent
				classes={classes}
				tooltipTitle="Vinyl Barcode Sticker"
				path="/vinylBarcode"
				icon={<VerticalShadesClosedOutlinedIcon />}
				clickedButton="vinylBarcodeButton"
			/>
    </Grid>
  );
};

export default SideBar;
