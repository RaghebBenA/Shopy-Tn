import React from "react";
import { Caresoul } from "./Carsoul";
import ProdCategory from "./category";
import {fade, makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme)=>({
  MainEvent: {
    width: "90%",
    display: "grid",
    gridTemplateColumns: "20% 80%",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  },
}))


export const MainEvent = ({
  activeStep,
  handleStepChange,
  classes,
  hover,
  handleHover
}) => {

  const MainStyle = useStyles()
  return (
    <div className={MainStyle.MainEvent}>
      <ProdCategory classes={classes} />
      <Caresoul
        activeStep={activeStep}
        handleStepChange={handleStepChange}
        classes={classes}
        handleHover={handleHover}
        hover={hover}
      />
    </div>
  );
};
