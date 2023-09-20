import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import Login from './Login';
import Signup from './Signup';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
 
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Signup",
    element: <Signup/>,
  }
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <RouterProvider router={router} />
);
