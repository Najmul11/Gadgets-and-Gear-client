import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import SecondaryLayout from "../layouts/SecondaryLayout";
import About from "../pages/About/About/About";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Cart from "../pages/Cart/Cart";
import Contact from "../pages/Contact/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import AllProducts from "../pages/Products/AllProducts/AllProducts";
import DynamicCategory from "../pages/Products/DynamicCategory/DynamicCategory";
import Products from "../pages/Products/Products/Products";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

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
                path:'/about',
                element:<About/>
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
                element:<Cart/>
            }
        ]
    },



    {
        path:'/dashboard',
        element:<SecondaryLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            }
        ]

    },

    

    {
        path:'/*',
        element:<Error/>
    }
])