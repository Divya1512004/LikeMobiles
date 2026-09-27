import {
  createBrowserRouter
} from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Brands from "./pages/Brands";
import BrandProducts from "./pages/BrandProducts";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

export const router =
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "products",
          element: <Products />
        },
        {
          path: "brands",
          element: <Brands />
        },
        {
          path: "brand/:brandName",
          element: <BrandProducts />
        },
        {
          path: "product/:id",
          element: <ProductDetails />
        },
        {
          path: "wishlist",
          element: <Wishlist />
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "checkout",
          element: <Checkout />
        },
        {
          path: "orders",
          element: <Orders />
        }
      ]
    }
  ]);