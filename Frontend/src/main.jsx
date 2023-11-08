import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './Page/Home';
import Create from './Page/Create';
import Edit from './Page/Edit';
import Read from './Page/Read';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Create/",
    element: <Create />,
  },
  {
    path: "Edit/:id",
    element: <Edit />,
  },
  {
    path: "Read/:id",
    element: <Read />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);