import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import AddToCart from "./add_to_cart";
import Grid from "@material-ui/core/Grid";
import NameAndPrice from "./Name_and_Price";
import Axios from "axios";
import { URL } from "../config/config";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.5)",
    marginTop: "2em",
    marginBottom: "2em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "ceneter",
    alignItems: "center"
  },
  root2:{
    position: "absolute",
    top: "50%",
    left: "0%"
  },
  secondGrid:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "ceneter",
    alignItems: "center"
  }
}));

const ProductOnFocus = ({ match }) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    const FetchProd = async () => {
      let PROD = await Axios.get(`${URL}/api/Products/${match.params.id}`);
      setProduct(PROD.data);
    };
    FetchProd();
  }, [match.params.id]);

  const classes = useStyle();
  return (
    <Container className={product ? classes.root : classes.root2}>
      {product ? (
        <React.Fragment>
          <Grid container justify="center" spacing={1}>
            <Grid item xs={6}>
              <AddToCart img={product[0].image} name={product[0].name} />
            </Grid>
            <Grid item xs={6} className={classes.secondGrid}>
              <NameAndPrice name={product[0].name} price={product[0].price} />
            </Grid>
          </Grid>
        </React.Fragment>
      ) : (
        <CircularProgress color="secondary"   size={250}/>
      )}
    </Container>
  );
};

export default ProductOnFocus;
