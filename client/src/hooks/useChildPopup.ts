import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

gsap.registerPlugin(useGSAP)

type SCOPE = React.MutableRefObject<HTMLDivElement | null>
type DURATION = any
type DEPENDENCY = []

/**
 * animation for all the child element on first render
 * @param {ref} scope
 * @param {stirng} duration
 * @param {[]} dependencies
 */
const useChildPopup = (
    scope: SCOPE,
    duration: DURATION,
    dependencies: DEPENDENCY,
) => {
    useGSAP(
        () => {
            if (!scope?.current?.hasChildNodes) return
            const tl = gsap.timeline()
            const from = {
                opacity: 0,
                y: 10,
            }
            const to = { opacity: 1, y: 0, duration, ease: "power2.inOut" }

            Array.from(scope?.current?.children).map((child) => {
                tl.fromTo(child, from, to)
            })
        },
        { scope, dependencies },
    )
}

export default useChildPopup
