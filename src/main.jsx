import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Root from './Layout/Root';
import AuthProvider from './Providers/AuthProvider';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
// import AuthProvider from './Providers/AuthProvider';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addProduct",
        element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>,
      },
      
      {
        path: "/myCart",
        element: <PrivetRoute><MyCart></MyCart></PrivetRoute>,
        loader: () => fetch(`http://localhost:5000/cart`)
      },
      {
        path:"/products/:brand",
        element: <Products></Products>,
        loader: ({params}) => fetch(`http://localhost:5000/gadgets/${params.brand}`)
      },
      {
        path: "/updateProduct/:id",
        element: <PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute>,
        loader: () => fetch(`http://localhost:5000/gadgets`)
      },
      {
        path:"/productDetails/:id",
        element: <PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
        loader: () => fetch(`http://localhost:5000/gadgets`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)


