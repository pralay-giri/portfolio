import { configureStore } from "@reduxjs/toolkit"
import backGroundSlice from "./backGroundSlice"
import themeSlice from "./themeSlice"
import mouseSlice from "./mouseSlice"
import contactSlice from "./contactSlice"

export const store = configureStore({
    reducer: {
        background: backGroundSlice,
        theme: themeSlice,
        mouse: mouseSlice,
        contact: contactSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
