import { createSlice } from "@reduxjs/toolkit"

interface INITSTATE {
    theme: "DARK" | "LIGHT"
}

const initialState: INITSTATE = {
    theme: "DARK",
}

const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        },
    },
})
export default themeSlice.reducer
export const { setTheme } = themeSlice.actions
