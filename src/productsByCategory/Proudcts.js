import React from "react"
import  Grid  from "@material-ui/core/Grid"
import Product from "../home/Product";

const ProductBycat = ({products,condition}) =>{
return (
    <Grid container justify="center" spacing={2}>
    {products.map(({ name, image, id, price }) => (
      <Grid key={id} item>
        <Product
          title={name}
          image={image}
          price={price}
          condition={condition}
          id={id}
        />
      </Grid>
    ))}
  </Grid>
)
}

export default ProductBycat