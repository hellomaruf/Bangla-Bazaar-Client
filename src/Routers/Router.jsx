import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Products from "../Components/Products/Products";
import ProductDetails from "../Components/Products/ProductDetails";
import SearchProducts from "../Components/Products/SearchProducts";
import Cart from "../Components/Cart/Cart";
import ProceedToCheckout from "../Pages/ProceedToCheckout";
import SuccessPayment from "../Pages/Payment/SuccessPayment";
import FailPayment from "../Pages/Payment/FailPayment";
import CanclePayment from "../Pages/Payment/CanclePayment";
import Profile from "../Pages/Profile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:name",
        element: <Products />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/search/:itemName",
        element: <SearchProducts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/proceed-to-checkout",
        element: <ProceedToCheckout />,
      },
      {
        path: "/success-payment",
        element: <SuccessPayment />,
      },
      {
        path: "/fail-payment",
        element: <FailPayment />,
      },
      {
        path: "/cancle-payment",
        element: <CanclePayment />,
      },
      {
        path: '/profile',
        element:<Profile/>
      }
    ],
  },
]);
