import React from "react"
import { FaLinkedinIn } from "react-icons/fa6"
import { FaInstagram, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import { TiSocialFacebook } from "react-icons/ti"
import { setMouseIsHovered } from "@/store/mouseSlice"
import { useDispatch } from "react-redux"

const links = [
    {
        name: "github",
        element: <FaGithub />,
        link: "",
    },
    {
        name: "instagram",
        element: <FaInstagram />,
        link: "",
    },
    {
        name: "linkedin",
        element: <FaLinkedinIn />,
        link: "",
    },
    {
        name: "facebook",
        element: <TiSocialFacebook />,
        link: "",
    },
]

const Footer: React.FC = () => {
    const dispatch = useDispatch()
    return (
        <div className="lg:relative lg:bg-transparent lg:w-auto lg:bg-red-500 lg:justify-normal lg:backdrop-blur-none lg:bg-none flex gap-10 text-xl fixed justify-evenly bottom-0 left-0 w-full bg-black py-3 px-5 bg-opacity-20 backdrop-blur-lg">
            {links.map((link) => {
                return (
                    <Link
                        to={link.link}
                        className="hover:text-mouse-hover-color transition-colors"
                        onMouseEnter={() => dispatch(setMouseIsHovered(true))}
                        onMouseLeave={() => dispatch(setMouseIsHovered(false))}
                    >
                        {link.element}
                    </Link>
                )
            })}
        </div>
    )
}

export default Footer
