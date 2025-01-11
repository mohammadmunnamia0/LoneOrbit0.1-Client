import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import JobDetails from "../pages/JobDetails";


 const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
           path:'/',
            element:<Home></Home>,
            // loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`),  --> before using axios
        },
        {
          path:'/login',
          element:<Login/>,
        },
        {
          path:'/registration',
          element:<Registration/>,
        },
        {
          path:'/job/:id',
          element:<JobDetails></JobDetails>,
          loader: ({params}) =>
             fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
        },
      ],
    },
  ]);


  export default router;