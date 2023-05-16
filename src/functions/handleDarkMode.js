export const handleDarkMode = (darkMode, callback) => {
    if (darkMode) {
        window.localStorage.setItem('darkMode', 'false')
        callback(false)
    } else {
        window.localStorage.setItem('darkMode', 'true')
        callback(true)
    }
}