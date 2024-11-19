import { PROPTYPE } from "@/types"
import React, { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { AiFillSun } from "react-icons/ai"
import { MdDarkMode } from "react-icons/md"
import { FaBarsStaggered } from "react-icons/fa6"
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
    {
        id: 4,
        name: "Resume",
        path: "resume",
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
     * state for navbar
     */
    const [isNavBarVisible, setIsnavBarVisible] = useState<boolean>(false)

    useEffect(() => {
        if (isNavBarVisible) {
            document.documentElement.style.overflow = "hidden"
        } else {
            document.documentElement.style.overflow = "visible"
        }
    }, [isNavBarVisible])

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
        <header
            className={`${isNavBarVisible ? "navbar-active" : ""} flex  my-10 mx-[5%] md:my-12 md:mx-[10%] lg:my-16 lg:mx-[15%] gap-5 items-center`}
        >
            {/* logo */}
            <div className="logo text-3xl md:text-4xl lg:text-6xl font-bold text-[#0C0C0C] dark:text-white mr-auto">
                <NavLink to={"/"}>PG.</NavLink>
            </div>

            {/* Navigation linkes */}
            <ul className="lg:flex gap-5 justify-evenly items-center lg:visible hidden">
                {navigationLinks.map((nav) =>
                    nav.path !== activePath ? (
                        <li
                            key={nav.id}
                            className="nav-hover"
                            onClick={() => setIsnavBarVisible(false)}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <NavLink to={`/${nav.path}`}>{nav.name}</NavLink>
                        </li>
                    ) : null,
                )}
                {/* dark and light mode */}
                <li className="cursor-pointer text-2xl text-[#0C0C0C] dark:text-white z-[999]">
                    {theme === "DARK" ? (
                        <button
                            onClick={() => handleThemeChange("LIGHT")}
                            className="theme-button"
                        >
                            <AiFillSun />
                        </button>
                    ) : (
                        <button
                            className="theme-button"
                            onClick={() => handleThemeChange("DARK")}
                        >
                            <MdDarkMode />
                        </button>
                    )}
                </li>
            </ul>
            <button
                className="lg:hidden relative z-[999] text-2xl dark:text-white text-[#0C0C0C]"
                onClick={() => setIsnavBarVisible((prev) => !prev)}
            >
                <FaBarsStaggered />
            </button>
        </header>
    )
}

export default Header
