import { createSlice } from "@reduxjs/toolkit"

interface INITSTATE {
    text: string | number
}

const initialState: INITSTATE = {
    text: "PG.",
}

const backGroundSlice = createSlice({
    name: "backGroundSlice",
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        },
    },
})

export default backGroundSlice.reducer
export const { setText } = backGroundSlice.actions
