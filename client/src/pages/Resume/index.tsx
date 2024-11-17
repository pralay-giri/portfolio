import { RootState } from "@/store"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { BsArrowsFullscreen } from "react-icons/bs"
import { setMouseIsHovered } from "@/store/mouseSlice"
import { useDispatch } from "react-redux"
import { FaArrowRightLong, FaRegCircleUser } from "react-icons/fa6"
import { RxCross1 } from "react-icons/rx"
import { PiShareFatLight } from "react-icons/pi"
import { BiHide } from "react-icons/bi"
import "./style.css"
import { toast } from "react-toastify"
import Footer from "@/components/footer"
import { NavLink } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import useChildPopup from "@/hooks/useChildPopup"

gsap.registerPlugin(useGSAP)

const index: React.FC = () => {
    const theme = useSelector((state: RootState) => state.theme.theme)
    const dispatch = useDispatch()
    const resumeDiv = useRef<HTMLDivElement | null>(null)
    const animationContainerRef = useRef<HTMLDivElement | null>(null)
    const [isSettingVisible, setIsSettingVisible] = useState<boolean>(false)

    useEffect(() => {
        const fulscreenHandler = () => {
            resumeDiv.current?.classList.toggle("fullscreen")
            resumeDiv.current?.classList.toggle("group")
        }
        document.addEventListener("fullscreenchange", fulscreenHandler)

        return () => {
            document.removeEventListener("fullscreenchange", fulscreenHandler)
        }
    }, [])

    const handleMousEnter = useCallback(() => {
        dispatch(setMouseIsHovered(true))
    }, [])

    const handleMousLeave = useCallback(() => {
        dispatch(setMouseIsHovered(false))
    }, [])

    const handleFullscreen = useCallback(() => {
        if (!resumeDiv.current) return
        document.documentElement.requestFullscreen()
    }, [])

    const handleOpenSetting = () => {
        setIsSettingVisible(true)
    }

    const handleShareResume = useCallback(async () => {
        try {
            const rawFile = await fetch("/pralay_resume.docx")
            const blob = await rawFile.blob()
            const file = new File([blob], "pralay_resume.docx")

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: "Pralay Giri",
                    files: [file],
                    text: "pralay giri resume",
                })

                toast.success("successfully shared")
            } else {
                toast.info("Sharing files is not supported by this browser")
            }
        } catch (error) {
            console.log(error)
            toast.error("Error sharing document")
        }
    }, [])

    const handleHideControles = () => {
        setIsSettingVisible(() => false)
    }

    useGSAP(() => {
        gsap.to(".animate-arrow", {
            repeat: -1,
            x: 10,
            duration: 1,
            animationDuration: 2,
        })
    }, [{ scope: animationContainerRef }])

    useChildPopup(animationContainerRef, "0.3", [])

    return (
        <div
            className="mx-[15%] my-[4%] text-[#0C0C0C] dark:text-white"
            ref={animationContainerRef}
        >
            <header className="text-6xl font-bold relative w-fit">
                Resume
                <span className="after:absolute after:w-2 after:h-2 after:bg-[#0C0C0C] dark:after:bg-white after:bottom-3 after:-right-3 after:rounded-sm"></span>
            </header>
            <p className="my-5">
                <span>Reach out to me via</span>{" "}
                <Link to="/contact" className="font-bold text-lg">
                    Contact Page
                </Link>{" "}
                <span>or</span>{" "}
                <a
                    className="font-bold text-lg cursor-pointer"
                    download={"pralay-resume.docx"}
                    href={"/pralay_resume.docx"}
                >
                    Download
                </a>
            </p>
            <div
                className="w-[75%] relative group my-10"
                onMouseEnter={handleMousEnter}
                onMouseLeave={handleMousLeave}
                ref={resumeDiv}
            >
                <img
                    src="/pralay_resume_black.jpg"
                    className={
                        theme === "DARK"
                            ? "visible"
                            : "hidden" +
                              " transition-all delay-500 object-cover w-[100%]"
                    }
                    alt="resume"
                />
                <img
                    src="/pralay_resume.jpg"
                    className={
                        theme === "DARK"
                            ? "hidden"
                            : "visible" +
                              " transition-all delay-500 object-cover w-[100%]"
                    }
                    alt="resume"
                />
                <div className="group-hover:opacity-100 opacity-0 absolute left-0 bottom-0 w-full h-[8%] bg-gradient-to-t from-black/60 to-white/40 dark:from-white/60 dark:to-black/40 transition-all duration-200 flex flex-row justify-end items-end p-5 text-xl font-bold gap-7">
                    <button
                        className="cursor-pointer"
                        onClick={handleOpenSetting}
                    >
                        <HiOutlineDotsHorizontal />
                    </button>
                    <button
                        className="cursor-pointer"
                        onClick={handleFullscreen}
                    >
                        <BsArrowsFullscreen />
                    </button>
                </div>
                <div
                    className={`${isSettingVisible ? "visible" : "hidden"} absolute inset-0 dark:bg-white dark:bg-opacity-70 dark:backdrop-blur-lg  bg-black bg-opacity-80 backdrop-blur-lg`}
                >
                    <header className="fixed z-50 w-full px-5 py-3 flex justify-between dark:text-gray-800 text-gray-100">
                        <div className="flex  gap-3 items-center ">
                            <Link
                                to={"https://github.com/pralay-giri"}
                                target="_blank"
                                className="text-4xl"
                            >
                                <FaRegCircleUser />
                            </Link>
                            <p className="flex flex-col">
                                <span className="text-lg font-bold">
                                    Pralay Giri
                                </span>
                                <span className="font-thin dark:text-gray-700 text-gray-200">
                                    Created by pralay giri
                                </span>
                            </p>
                        </div>
                        <button
                            onClick={handleHideControles}
                            className="text-2xl hover:opacity-60 transition-all cursor-pointer"
                        >
                            <RxCross1 />
                        </button>
                    </header>
                    <section className="fixed flex gap-7 items-center justify-center w-full h-full *:w-14 *:aspect-square *:text-2xl *:bg-gray-800 dark:*:bg-white *:text-white dark:*:text-gray-800 *:rounded-full *:flex *:items-center *:justify-center *:backdrop-blur-sm *:bg-opacity-55 ">
                        <button
                            className="hover:opacity-60 transition-all"
                            onClick={handleShareResume}
                        >
                            <PiShareFatLight />
                            <p className="absolute -bottom-[90%] text-sm">
                                share
                            </p>
                        </button>
                        <button
                            className="hover:opacity-60 transition-all"
                            onClick={handleHideControles}
                        >
                            <BiHide />
                            <p className="absolute -bottom-[90%] text-sm">
                                hide controlers
                            </p>
                        </button>
                    </section>
                </div>
            </div>
            <div className="a-3 my-10">
                <NavLink
                    to={"/contact"}
                    className="flex gap-5 items-center w-fit group"
                >
                    <p className="group-hover:underline group-hover:underline-offset-4 ">
                        Are you convinced to contact me now?
                    </p>
                    <FaArrowRightLong className="text-2xl animate-arrow" />
                </NavLink>
            </div>
            <Footer />
        </div>
    )
}

export default index
