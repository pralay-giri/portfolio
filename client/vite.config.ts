import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@router": path.resolve(__dirname, "./src/router"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@store": path.resolve(__dirname, "./src/store"),
            "@components": path.resolve(__dirname, "./src/components"),
        },
    },
})
