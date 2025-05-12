import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import AddJob from "../pages/AddJob";
import AllJobs from "../pages/AllJobs";
import BidRequests from "../pages/BidRequests";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import JobDetails from "../pages/JobDetails";
import Login from "../pages/Login";
import MyBids from "../pages/MyBids";
import MyPostedJobs from "../pages/MyPostedJobs";
import Registration from "../pages/Registration";
import UpdateJob from "../pages/UpdateJob";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/login',
          element: <Login/>,
        },
        {
          path: '/registration',
          element: <Registration/>,
        },
        {
          path: '/job/:id',
          element: <JobDetails></JobDetails>,
          loader: ({params}) =>
             fetch(`http://localhost:9000/job/${params.id}`),
        },
        {
          path: '/update/:id',
          element: <UpdateJob></UpdateJob>,
          loader: ({params}) =>
            fetch(`http://localhost:9000/job/${params.id}`),
        },
        {
          path: '/add_jobs',
          element: <AddJob></AddJob>,
        },
        {
          path: '/my_posted_jobs',
          element: <MyPostedJobs/>,
        },
        {
          path: '/my_bids',
          element: <MyBids></MyBids>,
        },
        {
          path: '/bid_requests',
          element: <BidRequests></BidRequests>,
        },
        {
          path: '/all_jobs',
          element: <AllJobs></AllJobs>,
        }
      ],
    },
  ]);

export default router;