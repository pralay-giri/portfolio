/**
 * used to check if the device is on phone
 */
export const checkDeviceIsPhone = (): boolean => {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
}
