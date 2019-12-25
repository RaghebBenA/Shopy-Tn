import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Description from "./descriptions";


const useStyle = makeStyles((theme)=>({
    root:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "ceneter",
        alignItems: "center"
    },
    price:{
        width: 268,
        height: 48,
        textAlign: "center",
        fontFamily: "Sanchez",
        fontSize: 36,
        backgroundColor: "rgba(191, 3, 3, 0.25)",
        color: "#BA2C2C"
    },
    name:{
        fontFamily: "Sanchez",
        fontSize: 48,
        marginBottom:2
    }
}))


const NameAndPrice = ({ name,price }) => {
    const classes = useStyle()
  return (
    <div className={classes.root} >
      <p className={classes.name}>{name}</p>
      <div className={classes.price}>${price}</div>
      <Description />
    </div>
  );
};


export default NameAndPrice
