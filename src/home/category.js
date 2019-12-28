import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MobileScreenShareIcon from "@material-ui/icons/MobileScreenShare";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import RouterIcon from "@material-ui/icons/Router";
import uuid from "uuid/v4";
import { Link } from "react-router-dom";


export const Category = [
  {
    name: "Telephone & Tablette",
    icon: <MobileScreenShareIcon />
  },
  {
    name: "Desktop & Laptop",
    icon: <DesktopMacIcon />
  },
  {
    name: "Network",
    icon: <RouterIcon />
  },
  {
    name: "Men Clothes",
    icon: <i className="fas fa-tshirt" />
  },
  {
    name: "Women Clothes",
    icon: <i className="fas fa-female" />
  },
  {
    name: "Elctronique",
    icon: <i className="fas fa-plug" />
  }
];

const ProdCategory = ({ classes }) => {
  return (
    <div className={classes.Category}>
      <List>
        {Category.map(({ name, icon }) => (
          <ListItem className={classes.ListItem} key={uuid()}>
            <Link to={`/Products/${name}/page/${1}`} className={classes.LinkStyle}>
              <ListItemText>{name}</ListItemText>
              <ListItemIcon>{icon}</ListItemIcon>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ProdCategory;
