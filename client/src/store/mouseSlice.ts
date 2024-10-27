import { createSlice } from "@reduxjs/toolkit"

interface INITSTATE {
    isLinkHovered: boolean
}

const initialState: INITSTATE = {
    isLinkHovered: false,
}

const mouseSlice = createSlice({
    name: "backGroundSlice",
    initialState,
    reducers: {
        setMouseIsHovered: (state, action) => {
            state.isLinkHovered = action.payload
        },
    },
})

export default mouseSlice.reducer
export const { setMouseIsHovered } = mouseSlice.actions
