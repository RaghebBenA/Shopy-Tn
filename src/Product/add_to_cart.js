import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { URL } from "../config/config";

const useStyle = makeStyles((theme) => ({
    root:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "ceneter",
        alignItems: "center"
    },
  Margin: {
    margin: theme.spacing(1),
  },
  extendIcon: {
    marginRight: theme.spacing(1)
  },
  img:{
      width: '70%',
  }
}));

const AddToCart = ({img,name}) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <img src={`${URL}/${img}`} alt={name} className={classes.img} />
      <Fab
        variant="extended"
        color="secondary"
        aria-label="add"
        className={classes.Margin}
      >
        <ShoppingCartIcon fontSize="inherit" />
        Add To Cart
      </Fab>
    </div>
  );
};

export default AddToCart
