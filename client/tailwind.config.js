/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "loadder-bg": "#040D12",
                "mouse-fllower-dot": "#6b7280",
                "mouse-fllower-circle": "#6b7280",
                "mouse-hover-color": "#f7418f",
            },
        },
    },
    plugins: [],
}
