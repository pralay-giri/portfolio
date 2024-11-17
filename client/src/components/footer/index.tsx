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
        link: "https://github.com/pralay-giri",
    },
    {
        name: "instagram",
        element: <FaInstagram />,
        link: "https://www.instagram.com/_pralaygiri",
    },
    {
        name: "linkedin",
        element: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/prala-ygiri",
    },
    {
        name: "facebook",
        element: <TiSocialFacebook />,
        link: "https://www.facebook.com/profile.php?id=100087947311318",
    },
]

const Footer: React.FC = () => {
    const dispatch = useDispatch()
    return (
        <div className="lg:relative lg:bg-transparent lg:w-full lg:bg-red-500 lg:justify-normal lg:backdrop-blur-none lg:bg-none flex gap-10 text-xl fixed justify-evenly bottom-0 left-0 w-full bg-black py-3 px-5 bg-opacity-20 backdrop-blur-lg dark:text-white text-[#0C0C0C]">
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
