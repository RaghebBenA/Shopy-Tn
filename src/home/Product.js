import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { URL } from "../config/config";
import Grow from "@material-ui/core/Grow";
import Badge from "@material-ui/core/Badge";
import {Link} from "react-router-dom"

const useStyle = makeStyles({
  card: {
    width: 290,
    boxShadow: "none",
    transition: "boxShadow .3s",
    "&:hover": {
      boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.5)"
    }
  },
  media: {
    height: 220
  },
  image: {
    width: 280,
    height: 210
  },
  link:{
    textDecoration: "none"
  }
});

const Product = ({ image, title, price, condition,id }) => {
  const classes = useStyle();

  return (
    <Grow in={condition}>
    <Link to={`/Product/${id}`} className={classes.link}>
      <Badge color="secondary" badgeContent={`${price}$`} max={9999}>
        <Card  className={classes.card}>
          <CardActionArea>
            <CardMedia title={title} className={classes.media}>
              <img
                src={`${URL}/${image}`}
                alt={title}
                className={classes.image}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Badge>
      </Link>
    </Grow>
  );
};

export default Product;
