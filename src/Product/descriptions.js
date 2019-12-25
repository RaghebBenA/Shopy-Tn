import React from "react";
import {makeStyles} from "@material-ui/core/styles"


const useStyle = makeStyles({
    root: {
      textAlign: "center",
    },
    title: {
        fontFamily: "Sanchez",
        fontSize: 36,
        marginBottom: 0
    },
    desc:{
        fontFamily: "Sanchez",
        fontSize: 18,
        marginTop: 2
    }
})


const Description = () => {
  
 const classes = useStyle()

  return (
    <div className={classes.root}>
      <p className={classes.title}>Description:</p>
      <p className={classes.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};


export default Description