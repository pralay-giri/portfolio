export const getDeviceTheme = () => {
    return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? 1
        : 0
}
