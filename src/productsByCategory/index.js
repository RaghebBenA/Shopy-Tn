import React, { useEffect, useState } from "react";
import { Category } from "../home/category";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { URL } from "../config/config";
import ProductBycat from "./Proudcts";
import Pagnation from "./pagnation";
import { useSelector, useDispatch } from "react-redux";
import { PRODUCT_FETCH } from "../Redux/actions/types";

const useStyle = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.5)",
    marginBottom: "2em"
  },
  root2: {
    position: "absolute",
    top: "50%",
    left: "0%"
  },
  title: {
    fontSize: 36,
    fontFamily: "Galindo"
  }
}));

const ProductByType = ({ match }) => {
  const [title, setTitle] = useState();
  const [condition, setCondtion] = useState(false);
  const [pages, setPages] = useState(1);
  const Products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    function GetCategory() {
      return Category.filter((p) => {
        return p.name === match.params.category;
      });
    }

    setTitle(GetCategory());
  }, [match.params.category]);

  useEffect(() => {
    Axios.get(
      `${URL}/api/Products/category/${match.params.category}/${match.params.page}`
    )
      .then((Prod) => {
        dispatch({ type: PRODUCT_FETCH, payload: Prod.data.data });
        setPages(Prod.data.pages);
      })
      .catch((e) => {
        console.log(e);
      });
    return () => {
      dispatch({ type: PRODUCT_FETCH, payload: [] });
    };
  }, [match.params.category, match.params.page, dispatch]);
  useEffect(() => {
    if (Products.length > 0) {
      setCondtion(true);
    } else {
      setCondtion(false);
    }
  }, [Products]);

  const classes = useStyle();

  return (
    <Container
      className={title && Products.length > 0 ? classes.root : classes.root2}
    >
      {title && Products.length > 0 ? (
        <React.Fragment>
          <p className={classes.title}>
            {title[0].icon} {title[0].name}
          </p>
          <ProductBycat products={Products} condition={condition} />
          <Pagnation
            page={Number(match.params.page)}
            pageNumber={pages}
            name={title[0].name}
          />
        </React.Fragment>
      ) : (
        <CircularProgress color="secondary" size={250} />
      )}
    </Container>
  );
};

export default ProductByType;
