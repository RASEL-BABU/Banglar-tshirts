import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './components/Home/Home.jsx';
import Main from './components/Main/Main.jsx';
import OrdersReview from './components/Orders/OrdersReview.jsx';
import Help from './components/Help/Help.jsx';
import About from './components/About/About.jsx';
import Grandpa from './components/Grandpa/Grandpa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('tshirts.json')
        
        
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/orders",
        element:<OrdersReview></OrdersReview>
      },
      {
        path:"/help",
        element:<Help></Help>
      },
      {
        path:"/grandpa",
        element:<Grandpa></Grandpa>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
