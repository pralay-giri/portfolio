import { createSlice } from "@reduxjs/toolkit"

interface INITSTATE {
    name: string
    email: string
    message: string
}

const initialState: INITSTATE = {
    name: "",
    email: "",
    message: "",
}

const contactSlice = createSlice({
    name: "contectSlice",
    initialState,
    reducers: {
        setInputs: (state, action) => {
            const payload: {
                key: "name" | "email" | "message"
                value: string
            } = action.payload
            state[payload.key] = payload.value
        },
        reset: (state) => {
            state = initialState
        },
    },
})

export default contactSlice.reducer
export const { setInputs, reset } = contactSlice.actions
