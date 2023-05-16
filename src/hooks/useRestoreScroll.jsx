import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const useRestoreScroll = () => {
    const url = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [url])

return null
}