import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Link from "@material-ui/core/Link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CallIcon from "@material-ui/icons/Call";
import Button from '@material-ui/core/Button';

export const DrawerComponent = ({
  classes,
  preventDefault,
  open,
  toggleDrawerFlase,
  toggleDrawerTrue,
  handleDialog
}) => {
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={toggleDrawerFlase}
      onOpen={toggleDrawerTrue}
      color="rgba(232, 30, 30, 0.86"
      classes={{ paper: classes.Drawer }}
    >
      <List>
        <ListItem>
          <ListItemText>
            <Link href="#" onClick={preventDefault} color="inherit">
              Sing In
            </Link>
          </ListItemText>
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link href="#" onClick={preventDefault} color="inherit">
              Cart
            </Link>
          </ListItemText>
          <ListItemIcon>
            <ShoppingCartIcon
              className={classes.shoopingIcon}
              fontSize="small"
            />
          </ListItemIcon>
        </ListItem>
        <ListItem>
        <ListItemText>
        <Button component="span" onClick={handleDialog} >Contact</Button>
        </ListItemText>
        <ListItemIcon>
        <CallIcon fontSize="small"/>
        </ListItemIcon>
      </ListItem>
      </List>
    </SwipeableDrawer>
  );
};
