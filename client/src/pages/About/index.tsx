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
        header: "Professional Experience",
        children: [
            {
                header: "Full-stack, React Native Developer",
                link: {
                    link: "https://teqsonic.com",
                    label: "view Teqsonic",
                },
                text: (
                    <>
                        Currently at{" "}
                        <Link
                            to="https://teqsonic.com"
                            target="_blank"
                            className="font-bold underline hover:text-mouse-hover-color transition-all "
                        >
                            Teqsonic
                        </Link>{" "}
                        (July 2025 - Present), I engineered a shared React
                        Native/TailwindCSS library, cutting code duplication by
                        25% across platforms. I also architected secure NestJS
                        payment microservices with WebSockets and optimized SQL
                        queries to reduce API latency from 170ms to 100ms.
                    </>
                ),
            },
            {
                header: "Full-stack Developer",
                link: {
                    link: "https://www.linkedin.com/search/results/all/?keywords=Bitslate%20Infotech",
                    label: "view Bitslate",
                },
                text: (
                    <>
                        At <strong>Bitslate Infotech</strong> (Sep 2024 - Mar
                        2025), I engineered secure multi-gateway payment
                        integrations (Stripe, Razorpay, PayPal) for high-volume
                        e-commerce systems and implemented recurring billing
                        logic using webhooks to automate renewals and minimize
                        churn.
                    </>
                ),
            },
            {
                header: "Back-end Developer",
                link: {
                    link: "https://www.techriskpartners.com/",
                    label: "view TRP Global",
                },
                text: (
                    <>
                        At{" "}
                        <Link
                            to="https://www.techriskpartners.com/"
                            target="_blank"
                            className="font-bold underline hover:text-mouse-hover-color transition-all "
                        >
                            TRP GLOBAL
                        </Link>{" "}
                        (May 2024 - Aug 2024), I automated SAP ERP data
                        pipelines using SQL, cutting manual validation time by
                        40%. I also developed OLAP cubes with Node.js and MSSQL
                        to drive actionable business intelligence dashboards.
                    </>
                ),
            },
        ],
    },
    {
        header: "Education",
        children: [
            {
                header: "Master of Computer Applications (MCA)",
                link: {
                    link: "https://makaut1.ucanapply.com/",
                    label: "view University",
                },
                text: (
                    <>
                        Pursuing MCA at the{" "}
                        <strong>West Bengal University of Technology</strong>{" "}
                        (2024 - 2026), focusing on advanced software
                        engineering, scalable system design, and deepening my
                        technical expertise to solve complex real-world
                        challenges.
                    </>
                ),
            },
            {
                header: "Bachelor of Computer Applications (BCA)",
                link: {
                    link: "https://makaut1.ucanapply.com/",
                    label: "view University",
                },
                text: (
                    <>
                        Graduated with a GPA of <strong>8.16</strong> from the{" "}
                        <strong>West Bengal University of Technology</strong>{" "}
                        (2021 - 2024). This period provided me with a solid
                        foundation in data structures, algorithms, and core
                        programming principles.
                    </>
                ),
            },
        ],
    },
    {
        header: "Skills & Technologies",
        children: [
            {
                header: "Engineering Stack",
                link: {
                    link: "https://github.com/pralay-giri?tab=repositories",
                    label: "view Github",
                },
                text: (
                    <>
                        My expertise includes <strong>JavaScript</strong> and{" "}
                        <strong>TypeScript</strong>, with familiarity in{" "}
                        <strong>C, C++, and Python</strong>. My primary stack
                        includes{" "}
                        <strong>
                            React Native, React, Node.js, Express.js, and NestJS
                        </strong>
                        . I am proficient in managing <strong>PostgreSQL, MySQL, and MongoDB</strong> databases, and utilizing tools like{" "}
                        <strong>Sequelize, Bull, Git, and Postman</strong>.
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
