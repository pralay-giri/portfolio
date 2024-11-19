import React, { useCallback, useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Footer from "@/components/footer"
import { NavLink } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { setMouseIsHovered } from "@/store/mouseSlice"
import useChildPopup from "@/hooks/useChildPopup"

gsap.registerPlugin(useGSAP)

const data = [
    {
        header: "About Me",
        children: [
            {
                header: "Experience",
                link: {
                    link: "https://www.techriskpartners.com/",
                    label: "view Company",
                },
                text: (
                    <>
                        I have experience as a backend developer in a software
                        company{" "}
                        <Link
                            to="https://www.techriskpartners.com/"
                            target="_blank"
                            className="font-bold underline hover:text-mouse-hover-color transition-all "
                        >
                            TRP GLOBAL
                        </Link>
                        , where I specialized in building and maintaining
                        server-side applications. My work focused on creating
                        efficient, scalable, and secure APIs, managing
                        databases, and ensuring seamless data flow between the
                        front end and back end. This role allowed me to gain
                        deep experience in server-side programming with [mention
                        key technologies, e.g., Node.js, Express, MSSQL, OLAP,
                        Message-Queues etc.], as well as in optimizing
                        application performance and integrating third-party
                        services. Through this position, I worked closely with
                        cross-functional teams, ensuring that backend solutions
                        aligned with project goals and met user needs. This
                        experience strengthened my problem-solving skills,
                        enhanced my ability to write clean, maintainable code,
                        and gave me insight into best practices for system
                        architecture and database management.
                    </>
                ),
            },
            {
                header: "Engineering",
                link: {
                    link: "https://github.com/pralay-giri?tab=repositories",
                    label: "view Github",
                },
                text: (
                    <>
                        Hello! I'm a SDE with a strong focus on building
                        reliable, efficient, and user-friendly applications. My
                        journey in software development has been driven by a
                        love for problem-solving and a passion for technology.
                        With experience in [mention specific languages,
                        frameworks, or technologies, e.g., JavaScript, Node.js,
                        React, etc.], I specialize in developing robust
                        applications that address real-world challenges.
                    </>
                ),
            },
            {
                header: "Education",
                link: {
                    link: "https://makaut1.ucanapply.com/",
                    label: "view University",
                },
                text: (
                    <>
                        I hold a degree in BCA from 'West Bengal University of
                        Technology', and persuing my MCA degree. My education
                        provided me with a strong foundation in key areas like
                        programming, software development, and systems
                        architecture. Through a combination of coursework and
                        hands-on projects, I gained expertise in [mention any
                        specific areas, e.g., web development, data structures,
                        algorithms, machine learning].In addition to technical
                        skills, my education emphasized critical thinking,
                        problem-solving, and effective collaboration. I also
                        took part in various projects and internships that
                        allowed me to apply theoretical knowledge to real-world
                        challenges, further developing my skill set and
                        preparing me for a career in software development.
                    </>
                ),
            },
        ],
    },
    {
        header: "My Reads",
        children: [
            {
                header: "Data Structure And Algorithm",
                link: {
                    link: "https://www.geeksforgeeks.org/data-structures/",
                    label: "view Resource",
                },
                text: (
                    <>
                        Data Structures and Algorithms (DSA) form the backbone
                        of efficient programming and problem-solving in computer
                        science. Mastering DSA has empowered me to write
                        optimized code, solve complex challenges, and build
                        scalable applications. Through my experience, I've
                        become proficient in fundamental data structures such as
                        arrays, linked lists, stacks, queues, and trees, as well
                        as advanced structures like graphs and hash tables.
                        Understanding these structures allows me to select the
                        right tool for each task, improving both performance and
                        readability. I've also worked with core algorithms,
                        including sorting, searching, dynamic programming, and
                        recursion. By learning to approach problems with a solid
                        algorithmic mindset, I can break down challenges into
                        manageable steps and develop robust, efficient
                        solutions. My focus on DSA continues to drive my growth
                        as a software developer, allowing me to bring more
                        impactful and efficient code to every project.
                    </>
                ),
            },
            {
                header: "Software Development Life Cycle (SDLC)",
                link: {
                    link: "https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/",
                    label: "view Resource",
                },
                text: (
                    <>
                        The Software Development Life Cycle (SDLC) is a crucial
                        framework that guides the development process from
                        inception to deployment and maintenance. Understanding
                        and applying SDLC methodologies have been instrumental
                        in my approach to software development, ensuring that
                        projects are delivered on time and meet quality
                        standards.
                    </>
                ),
            },
        ],
    },
]

const About: React.FC = () => {
    const dispatch = useDispatch()
    const animationContainerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        dispatch(setMouseIsHovered(false))
    }, [])

    useGSAP(() => {
        gsap.to(".animate-arrow", {
            repeat: -1,
            x: 10,
            duration: 1,
            animationDuration: 2,
        })
    }, [[{ scope: animationContainerRef }]])

    const handleMousEnter = useCallback(() => {
        dispatch(setMouseIsHovered(true))
    }, [])

    const handleMousLeave = useCallback(() => {
        dispatch(setMouseIsHovered(false))
    }, [])

    useChildPopup(animationContainerRef, "0.7", [])

    return (
        <div
            className="my-10 mx-[5%] md:my-12 md:mx-[10%] lg:my-16 lg:mx-[15%] font-serif"
            ref={animationContainerRef}
        >
            {data.map((section, idx) => (
                <div className="" key={section.header}>
                    <header
                        className={`${idx === 0 ? "text-xl md:text-3xl lg:text-5xl" : " lg:text-2xl"}  font-bold my-1 relative w-fit dark:text-white text-[#0C0C0C]`}
                    >
                        {section.header}
                        <span className="after:absolute after:w-1 after:h-1 lg:after:w-2 lg:after:h-2 after:bg-black dark:after:bg-white after:bottom-1 after:-right-3 after:my-1"></span>
                    </header>
                    <div className="left-line *:my-10 relative before:content-[''] before:absolute before:top-2 before:left-0 before:bg-[#0C0C0C] dark:before:bg-white before:w-[1px] before:h-full before:rounded-md">
                        {section.children.map((child) => {
                            return (
                                <div
                                    key={child.header}
                                    className="pl-5 relative before:content-[''] before:absolute before:top-2 before:-left-[0.5rem] before:border-2 before:bg-black before:w-4 before:aspect-square before:rounded-full"
                                >
                                    <header className="flex items-center justify-between ">
                                        <p className="w-[60%] md:w-[70%] font-bold my-1 text-md md:text-lg lg:text-xl text-gray-700 dark:text-gray-200">
                                            {child.header}
                                        </p>
                                        <Link
                                            to={child.link.link}
                                            target="_blank"
                                            className="underline hover:text-mouse-hover-color transition-all dark:text-white text-gray-700 text-md lg:text-lg"
                                            onMouseEnter={handleMousEnter}
                                            onMouseLeave={handleMousLeave}
                                        >
                                            {child.link.label}
                                        </Link>
                                    </header>
                                    <div className="text-sm md:text-md xl:text-lg pl-3 text-gray-700 dark:text-gray-300 font-sans">
                                        {child.text}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}
            <div className="my-10 mb-24">
                <NavLink
                    to={"/projects"}
                    className="flex gap-5 items-center w-fit group dark:text-white text-[#0C0C0C]"
                >
                    <p className="group-hover:underline group-hover:underline-offset-4 ">
                        Lets Continue To Projects
                    </p>
                    <FaArrowRightLong className="text-2xl animate-arrow" />
                </NavLink>
            </div>
            <Footer />
        </div>
    )
}

export default About
