import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home";


 const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
           path:'/',
            element:<Home></Home>,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`),
        },
        
        {
          path:'/login',
          element:<Login/>,
        },
        {
          path:'/registration',
          element:<Registration/>,
        }
      ]
    },
  ]);


  export default router;