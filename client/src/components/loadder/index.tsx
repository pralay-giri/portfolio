import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP)

const Loadder: React.FC = () => {
    const animationScope = useRef<HTMLElement | null>(null)
    useGSAP(() => {
        gsap.to(".sub-text", {
            repeat: -1,
            opacity: 0,
            duration: 1.5,
            ease: "power1.inOut",
            fontWeight: 100,
        })
    }, [{ scope: animationScope }])

    return (
        <div
            className="fixed top-0 left-0 inset-0 dark:bg-loadder-bg dark:text-white text-black bg-white
         grid place-content-center"
        >
            <section
                ref={animationScope}
                className="flex gap-5 text-2xl *:capitalize"
            >
                <p className="name font-bold">Pralay Giri</p>
                <p className="sub-text font-thin">Portfolio</p>
            </section>
        </div>
    )
}

export default Loadder
