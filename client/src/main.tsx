import { createRoot } from "react-dom/client"
import "./index.css"
import { router } from "@router/router"
import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "@store/index"
import MouseFollower from "./components/mouseFllower"

/**
 * render the root component
 */
const render = () => {
    const Root = createRoot(document.getElementById("root")!)
    Root.render(
        <Provider store={store}>
            <RouterProvider router={router} />
            <MouseFollower />
        </Provider>,
    )
}

render()
