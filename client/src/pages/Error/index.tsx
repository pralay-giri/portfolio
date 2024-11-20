import BackgroudGrid from "@/components/backgroudGrid"
import React from "react"

const Error = () => {
    return (
        <div
            className="w-screen h-screen flex justify-center items-center gap-3 "
            style={{
                background:
                    "radial-gradient(circle, transparent 0%, #000000 100%)",
            }}
        >
            <p className="font-sans">404</p>
            <span className="relative w-[1px] h-10 bg-white rounded-md dark:text-red-500"></span>
            <p className="font-sans">This Page could not be found</p>
            <div className="dark">
                <BackgroudGrid />
            </div>
        </div>
    )
}

export default Error
