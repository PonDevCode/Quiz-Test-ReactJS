import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/Home/HomePage';
import Dashboard from './components/Admin/content/Dashboard';
import ManageUser from './components/Admin/content/ManageUser';

// cấu hình chuyển hướng
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      /* existing routes */
      {
        path: "/user",
        element: <User />,
      },
     
    ]
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { index: true, element: <Dashboard /> },
      /* existing routes */
      {
        path: "manageUser",
        element: <ManageUser />
      },
     
      
    ]
  }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <RouterProvider router={router} />
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
