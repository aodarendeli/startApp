import { Navigate, createBrowserRouter } from "react-router-dom";
import Contact from "../pages/contact/Contact";
import HomePage from "../pages/HomePage/HomePage";
import App from "../App";
import NotFound from "../pages/NotFound/NotFound";
import ServerError from "../pages/ServerError/ServerError";
import About from "../pages/about/About";
import Catalog from "../pages/Catalog/Catalog";


const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'contact', element: <Contact /> },
            { path: 'about', element: <About /> },
            { path: 'catalog', element: <Catalog /> },
            { path: 'not-found', element: <NotFound /> },
            { path: 'server-error', element: <ServerError /> },
            { path: '*', element: <Navigate replace to='/not-found' /> },
        ]
    },
]
export const router = createBrowserRouter(routes) 