import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
    backgroundColor: "rgba(228, 221, 243, 0.29)",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  Input: {
    margin: ".5em",
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    width: 200
  }
}));

const SignIn = ({toggleAuth}) => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Typography variant="h5" component="h2">Sign In</Typography>
        <TextField
          label="Your Email"
          variant="outlined"
          className={classes.Input}
        />
        <FormControl className={clsx(classes.margin,classes.textField)} variant="outlined">
          <InputLabel htmlFor="password">
           Your Password
          </InputLabel>
          <OutlinedInput
            id="password"
            type="password"
            labelWidth={105}
          />
        </FormControl>
        <div>
        <Typography>
          If You Don't Have An Account You Can{" "}
          <Button component="span" onClick={toggleAuth}>Sing Up</Button>
        </Typography>
      </div>
      </Grid>
    </form>
  );
};

export default SignIn;
