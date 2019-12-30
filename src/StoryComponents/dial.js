import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';


const useStyle = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "rgba(232, 30, 30, 0.86)"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  footer: {
    width: "100%",
    position: "fixed",
    backgroundColor: "rgba(232, 30, 30, 0.86)",
    bottom: 0,
    right: 0,
    left: 0,
    padding: "1rem",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  },
  Griid: {
    width: "90%"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Diale = ({ open, handleClose,title1,title2,children }) => {
  const classes = useStyle();
  return (
    <Dialog
      fullScreen
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title1}
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
           {title2}
          </Button>
        </Toolbar>
      </AppBar>
          {children}
    </Dialog>
  );
};

export default Diale;
