import { setText } from "@/store/backGroundSlice"
import { setMouseIsHovered } from "@/store/mouseSlice"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

const Projects: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setMouseIsHovered(false))
        dispatch(setText("Projects."))
    }, [])
    return <div>Projects</div>
}

export default Projects
