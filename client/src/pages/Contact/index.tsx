import { setText } from "@/store/backGroundSlice"
import { setMouseIsHovered } from "@/store/mouseSlice"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

const Contact: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setMouseIsHovered(false))
        dispatch(setText("CONTACT."))
    }, [])
    return <div>Contact</div>
}

export default Contact
