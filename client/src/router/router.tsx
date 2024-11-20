import { Suspense, lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "@pages/Home"
import About from "@pages/About"
import Contact from "@pages/Contact"
import Projects from "@pages/Projects"
import Resume from "@pages/Resume"
import Admin from "@pages/Admin"
import Loadder from "@/components/loadder"
import Error from "@/pages/Error"
const App = lazy(() => import("@/App"))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense children={<App />} fallback={<Loadder />} />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/resume",
                element: <Resume />,
            },
            {
                path: "/admin",
                element: <Admin />,
            },
        ],
    },
    {
        path: "*",
        element: <Error />,
    },
])
