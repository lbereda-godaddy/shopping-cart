import React from 'react';
import { Card, CardContent, CardActions, Typography, Grid, Button, CardMedia } from '@mui/material'




function ShopItem({ product_id, name, description, price, imageUrl, onAddToCart}) {

  const images = [
  "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg",
  "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/44957d35-8edb-43cf-b518-457ff48a7e16/Product-grid-WDS.jpg",
  "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/4626b5ac-8ac0-4e88-ae38-dd94cb12a89d/Product-grid-Email.jpg",
  "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg",
  "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/8f679b96-df22-41fc-afd8-854d47a1c634/Product-grid-Hosting.jpg",
  "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/3b91b99f-57eb-44bd-b2e1-1cfd6529bbfb/feat-ols-your-store-your-way.jpg?impolicy=cms-feature-module",
]


  const addToCart = () => {
     /* Insert logic here  */
     onAddToCart({ product_id, name, price, quantity: 1 })
  }
  const sign = '$';
  
  return (
    <Card style={{height: "500px", width: "250px"}}>
        <CardMedia sx={{ height: 240}} image={imageUrl}/>
    <CardContent>
      <Typography variant="h6">{name}</Typography>
      <Typography>{sign}{price}</Typography>
      <Typography variant="subtitle2">{description}</Typography>
    </CardContent>
      <CardActions>
        <Button onClick={addToCart} color="secondary" className="border border-solid border-black">
  Add To Cart
</Button>



      </CardActions>
    </Card>
  );
}

export default ShopItem;

