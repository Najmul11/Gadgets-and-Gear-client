import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About/About";
import Contact from "../pages/Contact/Contact/Contact";
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
            }
        ]
    },
    {
        path:'/*',
        element:<Error/>
    }
])