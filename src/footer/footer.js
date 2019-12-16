import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import FooterLeftSide from "./leftSide";
import RightSideFooter from "./RightSide";

const useStyle = makeStyles({
  footer: {
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(232, 30, 30, 0.86)",
    bottom: 0,
    right: 0,
    left: 0,
    padding: "1rem",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    justifyContent:"center",
    alignItems: "center",
    
  },
  Griid:{
      width: "90%"
  }
});

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
          <FooterLeftSide />
          <RightSideFooter />
    </div>
  );
};

export default Footer;
