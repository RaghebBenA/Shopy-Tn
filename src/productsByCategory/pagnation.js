import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  link: {
    textDecoration: "none",
    color: "inherit"
  }
});

const Pagnation = ({ name, page,pageNumber }) => {
  const classes = useStyle()
 let items = []
  for(let i = 1 ; i <= pageNumber; i++ ){
    items.push(
      <Button key={i} color="secondary" variant={page !== i && "outlined"}>
      <Link to={`/Products/${name}/page/${i}`} className={classes.link}>
        {i}
      </Link>
    </Button>
    )
  }
  return (
    <div>
      <ButtonGroup variant="contained" color="secondary">
         {items}
      </ButtonGroup>
    </div>
  );
};

export default Pagnation;
