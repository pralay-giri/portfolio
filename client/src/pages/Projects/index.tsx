import { setMouseIsHovered } from "@/store/mouseSlice"
import React, { useCallback, useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import "./index.css"
import Footer from "@/components/footer"
import { NavLink } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import useChildPopup from "@/hooks/useChildPopup"

gsap.registerPlugin(useGSAP)

const projects = [
    {
        name: "Tic Tac Toe",
        link: "https://github.com/pralay-giri/Real-Time-Tic-Tac-Toe",
        image: "/tictac.gif",
        desc: "Real-Time tic tac toe game. where two players are can play with them",
        tech: ["React", "NodeJs", "TypeScript", "JavaScript", "Socket.io"],
    },
    {
        name: "Video Calling Website",
        link: "https://github.com/pralay-giri/video_call_app_frontend",
        image: "/videocall.gif",
        desc: "video calling website. It can support video and audio calls,for this you need to create a room and join",
        tech: ["NodeJs", "TypeScript", "JavaScript", "Socket.io", "webSocket"],
    },
    {
        name: "Youtube clone",
        link: "https://github.com/pralay-giri/youtube-clone",
        image: "/youtube.gif",
        desc: "Youtube Clone, recreating some of features from the original youtube, with youtube api",
        tech: ["React", "JavaScript", "CSS"],
    },
    {
        name: "Shotting Animation",
        link: "https://github.com/pralay-giri/sorting-animation",
        image: "/shorting.gif",
        desc: "it helps you to visualize how the shorting work in programe",
        tech: ["HTML", "JavaScript", "Css"],
    },
    {
        name: "Swigy clone",
        link: "https://github.com/pralay-giri/Swiggy-clone",
        image: "/swigy.gif",
        desc: "Swigy clone, recreating some of features from the original swigy, with swigy api",
        tech: ["React", "JavaScript", "TailwindCss"],
    },
]

const Projects: React.FC = () => {
    const dispatch = useDispatch()

    const animationContainerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        dispatch(setMouseIsHovered(false))
    }, [])

    const handleMouseEnter = useCallback(() => {
        dispatch(setMouseIsHovered(true))
    }, [])

    const handleMouseLeave = useCallback(() => {
        dispatch(setMouseIsHovered(false))
    }, [])

    const handleClick = useCallback((link: string) => {
        window.location.replace(link)
    }, [])

    useGSAP(() => {
        gsap.to(".animate-arrow", {
            repeat: -1,
            x: 10,
            duration: 1,
            animationDuration: 2,
        })
    }, [{ scope: animationContainerRef }])

    useChildPopup(animationContainerRef, "0.5", [])

    return (
        <div
            className="my-10 mx-[5%] md:my-12 md:mx-[10%] lg:my-16 lg:mx-[15%]"
            ref={animationContainerRef}
        >
            <header className="text-xl md:text-3xl lg:text-5xl font-bold relative w-fit text-[#0C0C0C] dark:text-white mt-12">
                Projects
                <span className="after:absolute after:w-1 after:h-1 lg:after:w-2 lg:after:h-2 after:bg-[#0C0C0C] dark:after:bg-white after:bottom-[8px]  lg:after:bottom-1 after:-right-3 lg:after:rounded-sm after:rounded-none"></span>
            </header>
            <section className="grid grid-cols-1 lg:bg-transparent md:grid-cols-2 gap-5 my-10">
                {projects.map((project) => {
                    return (
                        <div
                            className="relative overflow-hidden rounded-xl dark:border dark:border-gray-300 border-[#0C0C0C] group cursor-pointer"
                            key={project.name}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(project.link)}
                        >
                            <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-gradient-to-t from-black/95 to-black/5 transition-all duration-300"></div>
                            <div className="text-sm p-4 absolute opacity-0 -bottom-[50%] group-hover:-bottom-0 transition-all duration-300 group-hover:opacity-100">
                                <p className="text-lg lg:text-2xl font-bold">
                                    {project.name}
                                </p>
                                <p className="text-sm lg:text-md">
                                    {project.desc}
                                </p>
                                <div className="*:md:text-xs *:lg:text-md flex flex-wrap gap-1 font-serif *:bg-white *:bg-opacity-20 *:backdrop-blur-md *:px-3 *:py-1 *:rounded-2xl">
                                    {project.tech.map((tech) => {
                                        return <p>{tech}</p>
                                    })}
                                </div>
                            </div>
                            <img
                                src={project.image}
                                alt="Project image"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    )
                })}
            </section>

            <div className="a-3 my-10 mb-24 text-[#0C0C0C] dark:text-white">
                <NavLink
                    to={"/resume"}
                    className="flex gap-5 items-center w-fit group"
                >
                    <p className="group-hover:underline group-hover:underline-offset-4 ">
                        Lets go to my Resume
                    </p>
                    <FaArrowRightLong className="text-2xl animate-arrow" />
                </NavLink>
            </div>
            <Footer />
        </div>
    )
}

export default Projects
