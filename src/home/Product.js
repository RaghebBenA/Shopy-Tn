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

const useStyle = makeStyles({
  card: {
    width: 290,
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
  }
});

const Product = ({ image, title, price, condition }) => {
  const classes = useStyle();

  return (
    <Grow in={condition}>
      <Badge color="secondary" badgeContent={`${price}$`} max={9999}>
        <Card>
          <CardActionArea className={classes.card}>
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
    </Grow>
  );
};

export default Product;
