import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import "./index.css"
import { PROPTYPE } from "@/types"
import { useSelector } from "react-redux"
import { RootState } from "@/store"

/**
 * register the puglins
 */
gsap.registerPlugin(useGSAP)

const MouseFollower: React.FC<PROPTYPE> = () => {
    const isLinkHovered = useSelector(
        (state: RootState) => state.mouse.isLinkHovered,
    )

    /**
     * state for is mouse is in Dom or not
     */
    const [isMouseInDom, setIsMouseInDom] = useState(false)

    /**
     * ref for the container
     */
    const containerScope = useRef<HTMLDivElement | null>(null)

    /**
     * inner dot element
     */
    const dotRef = useRef<HTMLDivElement | null>(null)

    /**
     * outer circle
     */
    const circleRef = useRef<HTMLDivElement | null>(null)

    const { contextSafe } = useGSAP({ scope: containerScope })

    const handleMouseMove = contextSafe((e: MouseEvent) => {
        gsap.to(".dot", {
            y: e.clientY + "px",
            x: e.clientX + "px",
            duration: 0.2,
        })

        gsap.to(".circle", {
            y: e.clientY + "px",
            x: e.clientX + "px",
            duration: 0.7,
        })
    })

    const handleMouseEnter = () => {
        setIsMouseInDom((_) => true)
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        document.documentElement.addEventListener(
            "mouseenter",
            handleMouseEnter,
        )

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    /**
     * animate the mouse fllower component respect to isLinkHovered
     */
    useGSAP(() => {
        if (isLinkHovered) {
            gsap.to(".dot", {
                width: "20px",
                backgroundColor: "#6b7280",
                opacity: 0.5,
                borderColor: "white",
                borderWidth: 2,
            })

            gsap.to(".circle", {
                scale: 0,
            })
        } else {
            gsap.to(".dot", {
                width: "8px",
                opacity: 1,
                borderColor: "",
                borderWidth: 0,
            })
            gsap.to(".circle", {
                scale: 1,
            })
        }
    }, [{ scope: containerScope, dependencies: [isLinkHovered] }])

    return (
        <div
            ref={containerScope}
            className={`fixed w-screen h-screen pointer-events-none ${isMouseInDom ? "visible" : "hidden"} ${isLinkHovered ? "small-virson" : "large-virson"}`}
        >
            <div ref={dotRef} className="dot"></div>
            <div ref={circleRef} className="circle"></div>
        </div>
    )
}

export default MouseFollower
