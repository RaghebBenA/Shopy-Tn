import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./NavStyle";
import Typography from "@material-ui/core/Typography";
import { DrawerComponent } from "./Drawer";
import { Link } from "react-router-dom";
import Diale from "../StoryComponents/dial"
import FooterLeftSide from "../footer/leftSide";
import RightSideFooter from "../footer/RightSide";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignIn/SignUp";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment'


export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openDial, setDialog] = useState(false);
  const [openSign, setOpenSignIn] = useState(false);
  const [authFlow, setauthFlow] = useState(false);
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const toggleDrawer = (bool) => {
    setOpen(bool);
  };
  const SignIn_Toggler = (event) => {
    event.preventDefault();

    setOpenSignIn(!openSign);
  };
  const Hadnledialog = () => {
    setDialog(!openDial);
  };

  const toggleAuth = () => {
    setauthFlow(!authFlow);
  };

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" noWrap className={classes.title}>
            <Link to="/" className={classes.linkBrand}>
              Shopy@Tn
            </Link>
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div classes={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              ></InputBase>
            </div>
            <div>
              <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <DrawerComponent
                classes={classes}
                preventDefault={preventDefault}
                SignIn_toggler={SignIn_Toggler}
                open={open}
                toggleDrawerFlase={() => toggleDrawer(false)}
                toggleDrawerTrue={() => toggleDrawer(true)}
                handleDialog={Hadnledialog}
              />
            </div>
            <Diale
              open={openDial}
              handleClose={Hadnledialog}
              title1="Contact Us"
              title2="Send Message"
            >
              <FooterLeftSide />
              <RightSideFooter />
            </Diale>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Diale
                open={openSign}
                handleClose={SignIn_Toggler}
                title1="Shopy@Tn"
                title2={!authFlow ? "Sign In" : "Sign Up"}
              >
                {!authFlow ? (
                  <SignIn toggleAuth={toggleAuth} />
                ) : (
                  <SignUp toggleAuth={toggleAuth} />
                )}
              </Diale>
            </MuiPickersUtilsProvider>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
