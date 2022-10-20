import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";

export const routes= createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
               path:'/',
               loader:()=> fetch('http://localhost:5000/news'),
               element:<Home/> 
            },
            {
               path:'/category/:id',
               loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`),
               element:<Category/> 
            },
           
            {
               path:'/news/:id',
               element:<News/> 
            },
           
        ]
    }
])