import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/RemoveCircleOutline";

const initialCart = [
  {
    id: 1,
    name: "Domain - .org",
    description: "Purchase a .org domain to start your business",
    salePrice: 89.99,
    originalPrice: 119.99,
    image: "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/8f679b96-df22-41fc-afd8-854d47a1c634/Product-grid-Hosting.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Domain - .co",
    description: "Purchase a .co domain to start your website",
    salePrice: 49.99,
    originalPrice: 69.99,
    image: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/3b91b99f-57eb-44bd-b2e1-1cfd6529bbfb/feat-ols-your-store-your-way.jpg?impolicy=cms-feature-module",
    quantity: 1,
  },
  {
    id: 3,
    name: "Domain - .com",
    description: "Purchase a .com domain to start your website",
    salePrice: 199.99,
    originalPrice: 249.99,
    image: "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg",
    quantity: 1,
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState(initialCart);
  const taxRate = 0.1;

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.salePrice * item.quantity,
    0
  );
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 4 }}>
          🛒 Your cart is empty.
        </Typography>
      ) : (
        cartItems.map((item) => (
          <Card key={item.id} sx={{ display: "flex", mb: 3, boxShadow: 3 }}>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.name}
              sx={{ width: 100, height: 100, objectFit: "cover" }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>

                <Box sx={{ mt: 1 }}>
                  <Typography component="span" sx={{ color: "red", fontWeight: "bold", fontSize: 18 }}>
                    ${item.salePrice.toFixed(2)}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{ ml: 1, textDecoration: "line-through", color: "gray" }}
                  >
                    ${item.originalPrice.toFixed(2)}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <IconButton onClick={() => handleDecrease(item.id)} size="small">
                    <RemoveIcon />
                  </IconButton>
                  <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                  <IconButton onClick={() => handleIncrease(item.id)} size="small">
                    <AddIcon />
                  </IconButton>
                </Box>

                <Typography sx={{ mt: 1, fontWeight: "bold" }}>
                  Line Total: ${(item.salePrice * item.quantity).toFixed(2)}
                </Typography>

                <Box sx={{ mt: 1, display: "flex", gap: 2 }}>
                  <Button
                    size="small"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                  <Button size="small" color="primary">
                    Save for Later
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Card>
        ))
      )}

      {cartItems.length > 0 && (
        <>
          <Divider sx={{ my: 4 }} />
          <Box>
            <Typography variant="body1">🛍️ Subtotal: ${subtotal.toFixed(2)}</Typography>
            {/* <Typography variant="body1">💸 Tax (10%): ${tax.toFixed(2)}</Typography> */}
            <Typography variant="h6" fontWeight="bold">
              💵 Total: ${total.toFixed(2)}
            </Typography>
            <Button variant="contained" color="success" sx={{ mt: 2, borderRadius: 2 }}>
              Continue to Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}