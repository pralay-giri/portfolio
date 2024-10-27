import { PROPTYPE } from "@/types"
import React, { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { AiFillSun } from "react-icons/ai"
import { MdDarkMode } from "react-icons/md"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import { useDispatch } from "react-redux"
import { setTheme } from "@/store/themeSlice"
import { setMouseIsHovered } from "@/store/mouseSlice"
import "./index.css"

const navigationLinks: {
    id: number | string
    name: string | number
    path: string
}[] = [
    {
        id: 1,
        name: "About",
        path: "about",
    },
    {
        id: 2,
        name: "Projects",
        path: "projects",
    },
    {
        id: 3,
        name: "Contact",
        path: "contact",
    },
]

const Header: React.FC<PROPTYPE> = () => {
    /**
     * theme selector
     */
    const theme = useSelector((state: RootState) => state.theme.theme)

    const dispatch = useDispatch()
    const location = useLocation()

    /**
     * state for path
     */
    const [activePath, setActivePath] = useState<string>(
        location.pathname.split("/")?.[1],
    )

    /**
     * setting the location/path name
     */
    useEffect(() => {
        setActivePath(location.pathname.split("/")?.[1])
    }, [location])

    /**
     * handle the theme changing functionality
     */
    const handleThemeChange = (theme: "DARK" | "LIGHT") => {
        dispatch(setTheme(theme))
    }

    const handleMouseEnter = () => {
        dispatch(setMouseIsHovered(true))
    }

    const handleMouseLeave = () => {
        dispatch(setMouseIsHovered(false))
    }

    return (
        <header className="flex my-16 mx-[15%] gap-5 items-center">
            {/* logo */}
            <div className="logo text-4xl text-white mr-auto">
                <NavLink to={"/"}>PG.</NavLink>
            </div>

            {/* Navigation linkes */}
            <ul className="flex gap-5 justify-evenly items-center">
                {navigationLinks.map((nav) =>
                    nav.path !== activePath ? (
                        <li
                            key={nav.id}
                            className="nav-hover"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <NavLink to={`/${nav.path}`}>{nav.name}</NavLink>
                        </li>
                    ) : null,
                )}
            </ul>

            {/* dark and light mode */}
            <div className="cursor-pointer text-2xl">
                {theme === "DARK" ? (
                    <AiFillSun
                        onClick={() => handleThemeChange("LIGHT")}
                        className="theme-button"
                        role="button"
                    />
                ) : (
                    <MdDarkMode
                        onClick={() => handleThemeChange("DARK")}
                        className="theme-button"
                        role="button"
                    />
                )}
            </div>
        </header>
    )
}

export default Header
