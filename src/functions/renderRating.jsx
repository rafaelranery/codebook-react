export const renderRating = (rating) => {
    const starArr = []
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            starArr.push(<i key={i} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>)
        } else {
            starArr.push(<i key={i} className="text-lg bi bi-star text-yellow-500 mr-1"></i>)
        }
    }
    return starArr
}