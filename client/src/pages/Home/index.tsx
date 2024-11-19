import React, { useEffect, useRef } from "react"
import "./index.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { NavLink } from "react-router-dom"
const HEADER_TEXT = "I'M PRALAY GIRI"
import { FaArrowRightLong } from "react-icons/fa6"
import Footer from "@/components/footer"
import { setMouseIsHovered } from "@/store/mouseSlice"
import { useDispatch } from "react-redux"
import useChildPopup from "@/hooks/useChildPopup"

gsap.registerPlugin(useGSAP)

const Home: React.FC = () => {
    const animationContainerRef = useRef<HTMLDivElement | null>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setMouseIsHovered(false))
    }, [])

    /**
     * for animating header text
     */
    useGSAP(() => {
        gsap.to(".animated-text-2", {
            repeat: -1,
            height: 1,
            duration: 0.6,
            delay: 1,
        })

        gsap.to(".animated-text-3", {
            delay: 2,
            repeat: -1,
            height: 1,
            duration: 1,
        })

        gsap.to(".animate-arrow", {
            repeat: -1,
            x: 10,
            duration: 1,
            animationDuration: 2,
        })
    }, [{ scope: animationContainerRef }])

    /**
     * for animating enrty of sections
     */
    useChildPopup(animationContainerRef, "0.3", [])

    return (
        <div
            className="my-10 mx-[5%] md:my-12 md:mx-[10%] lg:my-16 lg:mx-[15%]"
            ref={animationContainerRef}
        >
            <div className="a-1 mt-[20%] md:mt-[13%] mb-5 text-xl md:text-2xl lg:text-4xl font-bold overflow-hidden relative">
                <p className="animated-text dark:text-white text-[#0C0C0C]">
                    {HEADER_TEXT}
                </p>
                <p className="animated-text animated-text-2">{HEADER_TEXT}</p>
                <p className="animated-text animated-text-3">{HEADER_TEXT}</p>
            </div>
            <section className="a-2 font-sans capitalize  dark:text-gray-200 text-black">
                <strong className="text-[#f7418f] text-2xl">A</strong> front-end
                developer, back-end problem solver, and JavaScript enthusiast.
                By day (and occasionally night), I,m busy transforming ideas
                into code, crafting seamless web applications, and building
                user-friendly interfaces. From pixels to powerful APIs, I turn
                concepts into interactive, immersive digital experiences.
                <br />
                <span className="my-1" />
                <br />
                Beyond the code? I,m a full-time coffee enthusiast and a
                part-time tinkerer with emerging tech. Simplicity is my mantra.
                I believe the best solutions are often the cleanest. When I,m
                not deep in code, you,ll catch me diving into a good book,
                sketching out new ideas, or getting lost in the grooves of a
                jazz melody. Let,s build something amazing together. Feel free
                to reach out{" "}
                <strong className="uppercase font-bold text-xl hover:underline transition-all">
                    <NavLink to={"/contact"}>Contact Me</NavLink>
                </strong>
            </section>
            <div className="a-3 my-10 mb-24">
                <NavLink
                    to={"/about"}
                    className="flex gap-5 items-center w-fit group dark:text-white text-[#0C0C0C]"
                >
                    <p className="group-hover:underline group-hover:underline-offset-4 ">
                        See More About Me
                    </p>
                    <FaArrowRightLong className="text-2xl animate-arrow" />
                </NavLink>
            </div>
            <Footer />
        </div>
    )
}

export default Home
