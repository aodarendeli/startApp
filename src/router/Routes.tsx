import { Navigate, createBrowserRouter } from "react-router-dom";
import Contact from "../pages/contact/Contact";
import HomePage from "../pages/HomePage/HomePage";
import App from "../App";
import NotFound from "../pages/NotFound/NotFound";
import ServerError from "../pages/ServerError/ServerError";
import About from "../pages/about/About";
import Catalog from "../pages/Catalog/Catalog";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/BlogDetail/BlogDetail";


const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'iletisim', element: <Contact /> },
            { path: 'hakkımızda', element: <About /> },
            { path: 'catalog', element: <Catalog /> },
            { path: 'blog', element: <Blog /> },
            { path: 'blog/:id', element: <BlogDetail /> },
            { path: 'not-found', element: <NotFound /> },
            { path: 'server-error', element: <ServerError /> },
            { path: '*', element: <Navigate replace to='/not-found' /> },
        ]
    },
]
export const router = createBrowserRouter(routes) 