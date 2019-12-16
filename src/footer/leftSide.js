import React from "react";
import Typography from "@material-ui/core/Typography";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles({
  root: {
    margin: "1em",
    textAlign: "left"
  }
});

const FooterLeftSide = () => {
  const classes = useStyle();
  return (
    <Grid className={classes.root}
    container
    direction="column"
    justify="center"
    alignItems="center"
    >
      <Typography variant="h5" component="h2">
        Contact
      </Typography>
      <Typography>
        <CallIcon /> +21694191109
      </Typography>
      <Typography>
        <EmailIcon /> raghebbenamor.freelancer@gmail.com
      </Typography>
      <Typography>
        <LocationOnIcon /> Demo Country,Demo Address,5555
      </Typography>
    </Grid>
  );
};

export default FooterLeftSide;
