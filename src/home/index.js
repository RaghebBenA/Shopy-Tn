import React, { useState } from "react";
import {useTheme } from "@material-ui/styles";
import { NavBar } from "../Nav/Nav";
import { MainEvent } from "./MainEvent";
import {useStyles} from "./HomeStyles"


const Home = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hover,setHover] = useState(false)
  const classes = useStyles();
  const theme = useTheme();
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
 
   const HandleHover = () =>{
     setHover(!hover)
   }

  return (
    <div>
      <NavBar />
      <div  className={classes.root}>
        <MainEvent 
        theme={theme}
        activeStep={activeStep}
        handleStepChange={handleStepChange}
        classes={classes}
        hover={hover}
        handleHover={HandleHover}
        />
      </div>
    </div>
  );
};

export default Home;
