import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import Privacy from "./pages/privacy/Privacy.jsx";
import Protection from "./pages/protection/Protection.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Account from './pages/account/account.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "privacy",
                element: <Privacy />
            },
            {
                path: "protection",
                element: <Protection />
            },
            {
                path: "account",
                element: <Account />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
