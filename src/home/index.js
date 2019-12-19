import React, { useState, useEffect } from "react";
import { MainEvent } from "./MainEvent";
import { useStyles } from "./HomeStyles";
import axios from "axios";
import { URL} from "../config/config";
import { CookiesSet } from "./CookiesAlert";
import HomeProducts from "./ProductsHome";

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState();
  const [proudcts, setProducts] = useState({});
  const [hover, setHover] = useState(false);
  const classes = useStyles();
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const fetchUser = () => {
    const fetch = axios.get(`${URL}/api/userloco`);
    return fetch;
  };

  useEffect(() => {
    const fetchCookie = async () => {
      const data = await axios.get(`${URL}/api/userCookie`);
      setData(data);
    };
    fetchCookie();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      const Product = await axios.get(`${URL}/api/Products`);
      setProducts(Product.data);
    };
    fetchProduct();
  }, []);



  const HandleHover = () => {
    setHover(!hover);
  };

  return (
    <div className={classes.home}>
      <div className={classes.root}>
        <MainEvent
          activeStep={activeStep}
          handleStepChange={handleStepChange}
          classes={classes}
          hover={hover}
          handleHover={HandleHover}
        />

        <CookiesSet fetchCookie={fetchUser} />
      </div>
      <HomeProducts
        Products={
          Object.keys(proudcts).length > 0 && proudcts[Object.keys(proudcts)[0]]
        }
        CategoryName={Object.keys(proudcts)[0]}
      />
      <HomeProducts
      Products={
        Object.keys(proudcts).length > 0 && proudcts[Object.keys(proudcts)[1]]
      }
      CategoryName={Object.keys(proudcts)[1]}
    />
    </div>
  );
};

export default Home;
