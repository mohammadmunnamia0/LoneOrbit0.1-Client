import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import {Toaster} from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  <Toaster/>
  </AuthProvider>
  </StrictMode>
);
