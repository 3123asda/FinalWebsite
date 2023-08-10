import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './pages/about';
import Home from './pages/home';
import './pagesCss/login.css'
import LogIn from './pages/logIn';
import Category from './pages/category';
import CreateAccount from './pages/createAccount';
import Contact from './pages/contact';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <LogIn/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "category",
    element: <Category/>,
  },
  {
    path: "create-account",
    element: <CreateAccount/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <div className="yellow-green-background">

    </div>
  </RouterProvider>
);


