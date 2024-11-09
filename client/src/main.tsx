import { createRoot } from "react-dom/client"
import "./index.css"
import { router } from "@router/router"
import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "@store/index"
import MouseFollower from "./components/mouseFllower"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

/**
 * render the root component
 */
const render = () => {
    const Root = createRoot(document.getElementById("root")!)
    Root.render(
        <Provider store={store}>
            <RouterProvider router={router} />
            <MouseFollower />
            <ToastContainer
                autoClose={5000}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Provider>,
    )
}

render()
