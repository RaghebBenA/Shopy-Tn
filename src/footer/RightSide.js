import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  Input: {
    margin: ".5em",
    fontSize: 24,
    fontFamily: "Roboto"
  }
}));

const RightSideFooter = () => {
  const classes = useStyle();
  return (
    <form className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Typography variant="h5" component="h2">
          Sell With Shopy@TN
        </Typography>
        <TextField
          label="Your Name"
          variant="outlined"
          className={classes.Input}
        />
        <TextField
          label="Your Email"
          variant="outlined"
          className={classes.Input}
        />
        <TextField
          label="Your Message"
          multiline
          variant="outlined"
          className={classes.Input}
        />
      </Grid>

    </form>
  );
};

export default RightSideFooter;
