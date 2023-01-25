import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../layouts/DashBoardLayout";
import Main from "../layouts/Main";
import SecondaryLayout from "../layouts/SecondaryLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Cart from "../pages/Cart/Cart";
import Contact from "../pages/Contact/Contact/Contact";
import AdAllProducts from "../pages/Dashboard/AdAllProducts/AdAllProducts";
import Address from "../pages/Dashboard/AccountDetails/Address";
import Dashboard from "../pages/Dashboard/Dashboard";
import Orders from "../pages/Dashboard/Orders/Orders";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import AllProducts from "../pages/Products/AllProducts/AllProducts";
import DynamicCategory from "../pages/Products/DynamicCategory/DynamicCategory";
import Products from "../pages/Products/Products/Products";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AccountDetails from "../pages/Dashboard/AccountDetails/AccountDetails";
import AllOrders from "../pages/Dashboard/AllOrders/AllOrders";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },

            {
                path:'/contact',
                element:<Contact/>
            },

            {
                path:'/allproducts',
                element:<Products/>,
                children:[
                    {
                        path:'/allproducts',
                        element:<AllProducts/>
                    },

                    {
                        path:'/allproducts/:category',
                        element:<DynamicCategory/>
                    },
                ]
            },
        ]
    },
    {
        path:'/products/:id',
        element:<SecondaryLayout/>,
        children:[
            {
                path:'/products/:id',
                element:<SingleProduct/>
            },
        ]
    },



    {
        path:'/login',
        element:<SecondaryLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            }
        ]
    },
    {
        path:'/register',
        element:<SecondaryLayout/>,
        children:[
            {
                path:'/register',
                element:<Register/>
            }
        ]
    },



    {
        path:'/cart',
        element:<SecondaryLayout/>,
        children:[
            {
                path:'/cart',
                element:<PrivateRoute><Cart/></PrivateRoute>
            }
        ]
    },



    {
        path:'/dashboard',
        element:<PrivateRoute><DashBoardLayout/></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/dashboard/orders',
                element:<Orders/>
            },
            {
                path:'/dashboard/account_details',
                element:<AccountDetails/>
            },
            {
                path:'/dashboard/all_orders',
                element:<AllOrders/>
            },
            {
                path:'/dashboard/all_products',
                element:<AdminRoute><AdAllProducts/></AdminRoute>
            },
        ]

    },

    {
        path:'/*',
        element:<Error/>
    }
])