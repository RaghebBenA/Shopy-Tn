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
import Footer from "../footer/footer";
import { Link } from "react-router-dom";


export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openDial, setDialog] = useState(false);
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const toggleDrawer = (bool) => {
    setOpen(bool);
  };

  const Hadnledialog = () => {
    setDialog(!openDial);
  };

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolBar}>
       
            <Typography variant="h6" noWrap className={classes.title}>
            <Link to="/" className={classes.linkBrand} >
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
                open={open}
                toggleDrawerFlase={() => toggleDrawer(false)}
                toggleDrawerTrue={() => toggleDrawer(true)}
                handleDialog={Hadnledialog}
              />
            </div>
            <Footer open={openDial} handleClose={Hadnledialog} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
