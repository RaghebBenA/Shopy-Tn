import React,{useEffect,useState} from "react";
import Product from "./Product";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


const useStyle = makeStyles({
  root: {
    marginTop: "1.5em",
    marginLeft: "5%",
    marginBottom: "1.5em",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  titles: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1.5em",
    fontFamily: "Roboto",
    fontSize: 24,
    lineHeight: 28
  },
  product: {
    width: "100%",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  }
});

const HomeProducts = ({ Products, CategoryName }) => {
  const classes = useStyle();
  const [condition,setCondition] = useState(false)

  useEffect(()=>{
      if(Products){
          setCondition(true)
      }
  },[Products])

  return (
    <div className={classes.root}>
      <div className={classes.titles}>
        <Typography>{CategoryName}</Typography>
        <Typography>See More >></Typography>
      </div>
      <Grid container justify="center" spacing={1} className={classes.product}>
        {Products ? (
          Products.map(({ name, image, id }) => (
              <React.Fragment key={id}>
              <Product title={name} image={image} condition={condition} />
              </React.Fragment>
          ))
        ) : (
          <h1>Proccesing</h1>
        )}
      </Grid>
    </div>
  );
};

export default HomeProducts;
