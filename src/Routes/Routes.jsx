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
           path:'/home',
            element:<Home></Home>,
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