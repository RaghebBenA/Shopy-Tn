import React from "react";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import ShoopingOne from "../Asset/shoopingOne.jpg";
import { Typography } from "@material-ui/core";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Caresoul = ({
  activeStep,
  handleStepChange,
  classes,
  handleHover,
  hover
}) => {
  return (
    <AutoPlaySwipeableViews
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      <div
        className={classes.Caresouls}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <img src={ShoopingOne} alt="firstimg" className={classes.img} />
        {hover && (
          <div className={classes.Info}>
            <Typography>
              More Discount After Eeach Product You Will Buy
            </Typography>
          </div>
        )}
      </div>
    </AutoPlaySwipeableViews>
  );
};
