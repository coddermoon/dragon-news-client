import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";

export const routes= createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
               path:'/',
               element:<Home/> 
            }
        ]
    }
])