import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Link from "@material-ui/core/Link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const DrawerComponent = ({
  classes,
  preventDefault,
  open,
  toggleDrawerFlase,
  toggleDrawerTrue
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
      </List>
    </SwipeableDrawer>
  );
};
