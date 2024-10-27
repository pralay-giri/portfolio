import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import BackgroudGrid from "@components/backgroudGrid"
import Header from "@components/header"
import { useSelector } from "react-redux"
import { RootState } from "./store"

const App: React.FC = () => {
    const theme = useSelector((state: RootState) => state.theme.theme)

    useEffect(() => {
        const rootElm = document.documentElement.querySelector("#root")
        if (theme === "DARK") {
            rootElm?.classList.add("dark")
        } else {
            rootElm?.classList.contains("dark")
            rootElm?.classList.remove("dark")
        }
    }, [theme])

    return (
        <>
            <Header />
            <Outlet />
            <BackgroudGrid />
        </>
    )
}

export default App
