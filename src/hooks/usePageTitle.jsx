import { useEffect } from "react"

export const usePageTitle = (pageTitle) => {
    const baseTitle = 'Codebook | '

    useEffect(() => {
        document.title = `${baseTitle}${pageTitle}`
    }, [pageTitle])

    return null
}
