import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import ShopItem from '../components/ShopItem';
import ShopItemList from '../components/ShopItemList';
import { Container, Typography } from '@mui/material'

const itemList = [
  { name: 'Domain - .org',description: 'Purchase a .org domain to start your business', price: 8.99, imageUrl: "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/8f679b96-df22-41fc-afd8-854d47a1c634/Product-grid-Hosting.jpg" },
  { name: 'Wildcard SSL',description: 'Encrypt any subdomains that may exist on the site', price: 19.99, imageUrl: "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/4626b5ac-8ac0-4e88-ae38-dd94cb12a89d/Product-grid-Email.jpg",},
  { name: 'Domain - .co',description: 'Purchase a .co domain to start your website', price: 4.99, imageUrl: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/3b91b99f-57eb-44bd-b2e1-1cfd6529bbfb/feat-ols-your-store-your-way.jpg?impolicy=cms-feature-module" },
  { name: 'Domain - .com',description: 'Purchase a .com domain to start your website', price: 9.99, imageUrl: "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg",},
  { name: 'Standard SSL',description: 'Your standard SSL certificate', price: 14.99, imageUrl: "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/44957d35-8edb-43cf-b518-457ff48a7e16/Product-grid-WDS.jpg",},


]


export const ShopPage = () => (
  <Container>
    <Head title='Home'/>
    <div style={{"padding-bottom": "10px"}}>
      <Typography variant="h3">My Shop</Typography>   
    </div>
    <div>
    <div style={{"padding-bottom": "20px"}}></div>
      <Link href="/cart">View cart</Link>
      {/* <ShopItem {...itemPros} /> */}
      <ShopItemList items={itemList}/>
    </div>
  </Container>
);

export default ShopPage;