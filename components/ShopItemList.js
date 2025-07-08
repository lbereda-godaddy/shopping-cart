import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import ShopItem from './ShopItem';

function ShopItemList( {items} ) {

  // this is the state we will use to hold the response from the api
  const getProductsUrl = "http://localhost:8000/v1/products";
  const addToCartUrl = "http://localhost:8000/v1/cartitems";
  const [products, setProducts] = useState([]);
  const router = useRouter()

  //GET
  useEffect(() =>{
    const fetchProducts = async () => {
      const response = await fetch(getProductsUrl, { method: 'GET' });
      const json = await response.json();
      setProducts(json);
    };
    fetchProducts();
  }, []);
  //POST
  const handleAddToCart = async (product) => {
    /* add product to cart via api */
    /* redirect to the cart page */
    // const body = JSON.stringify(product);
    // const response = await fetch(addToCartUrl, { method: 'POST', body, headers: { 'content-type': 'application/json' }});
    // router.push("/cart")
    console.log("Adding to cart:", product);

    const response = await fetch(addToCartUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(product),
    });

    const result = await response.json();
    console.log("Respopnse from backend:", result);

    router.push("/cart");
  };

return (
    <Grid container direction="row" spacing={1}>
      {items.map(item =>
        // <Grid item xs>
          <ShopItem
            key={item.id}
            product_id={item.id} 
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
            onAddToCart={handleAddToCart}
          />
        // </Grid>
      )}
    </Grid>
  )
}


export default ShopItemList