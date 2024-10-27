import { PROPTYPE } from "@/types"
import React, { useCallback, useEffect, useRef, useState } from "react"
import "./index.css"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
const BOX_SIZE = 80

const BackgroudGrid: React.FC<PROPTYPE> = () => {
    /**
     * background text
     */
    const bgText = useSelector((state: RootState) => state.background.text)

    const gridContainer = useRef<HTMLDivElement | null>(null)

    const [RowColums, setRowColums] = useState({
        COLUMNS: Math.floor(window.innerWidth / BOX_SIZE) + 5,
        ROWS: Math.floor(window.innerHeight / BOX_SIZE) + 5,
    })

    const renderChildGridBox = useCallback(() => {
        const elements = []
        for (let i = 0; i < RowColums.COLUMNS * RowColums.ROWS; i++) {
            elements.push(
                <div
                    key={i}
                    className={`grid-element grid-${i} w-[${BOX_SIZE}px] aspect-square border border-white`}
                ></div>,
            )
        }
        return elements
    }, [RowColums])

    const handleResize = useCallback(() => {
        setRowColums((_) => ({
            COLUMNS: Math.floor(window.innerWidth / BOX_SIZE) + 5,
            ROWS: Math.floor(window.innerHeight / BOX_SIZE) + 5,
        }))
    }, [setRowColums])

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div className="rgb-backgournd absolute inset-0 pointer-events-none">
            <div
                ref={gridContainer}
                className={`bg-grid  fixed -top-2 -left-2 *:border-opacity-5 over`}
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${RowColums.COLUMNS}, 80px)`,
                    gridTemplateRows: `repeat(${RowColums.ROWS}, 80px)`,
                }}
            >
                {renderChildGridBox()}
            </div>
            <div className="bg-color"></div>
            <div className="bg-image"></div>
            <div className="text">{bgText}</div>
            <div className="overlay"></div>
        </div>
    )
}

export default BackgroudGrid
