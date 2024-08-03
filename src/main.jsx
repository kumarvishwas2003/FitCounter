import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModeSelect from './components/ModeSelect.jsx';
import Howtouse from './components/Howtouse.jsx';
import EasyMode from './components/EasyMode.jsx';
import MediumMode from './components/MediumMode.jsx';
import { HardMode } from './components/HardMode.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ModeSelect",
    element: <ModeSelect />,
  },
  {
    path: "/Howtouse",
    element: <Howtouse />,
  },
  {
    path: "/Easy-Mode",
    element: <EasyMode />,
  },
  {
    path: "/Medium-Mode",
    element: <MediumMode/>,
  },
  {
    path: "/Hard-Mode",
    element: <HardMode />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
