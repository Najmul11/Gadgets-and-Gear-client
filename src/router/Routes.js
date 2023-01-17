import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About/About";
import Contact from "../pages/Contact/Contact/Contact";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Products/Products/Products";

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
                path:'/products',
                element:<Products/>
            }
        ]
    }
])