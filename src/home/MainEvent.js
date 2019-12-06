import React from "react";
import { Caresoul } from "./Carsoul";
import ProdCategory from "./category";

export const MainEvent = ({
  theme,
  activeStep,
  handleStepChange,
  classes,
  hover,
  handleHover
}) => {
  return (
    <div className={classes.MainEvent}>
      <ProdCategory classes={classes} />
      <Caresoul
        theme={theme}
        activeStep={activeStep}
        handleStepChange={handleStepChange}
        classes={classes}
        handleHover={handleHover}
        hover={hover}
      />
    </div>
  );
};
