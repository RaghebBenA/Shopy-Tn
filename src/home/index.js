import React from "react";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    root: {
        background: "red",
        height: '100vh',
        textAlign: "center"
    },
    head: {
        margin: "auto"
    }
})

const Home = () => {
  
  const classes = useStyles()
  return (
    <Container maxWidth="md" className={classes.root}>
      <h1 className={classes.head}>Shopy@TN</h1>
    </Container>
  );
};

export default Home;
