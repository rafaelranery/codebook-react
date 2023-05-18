export const filterReducer = (state, action) => {
    const { type, payload } = action

    switch(type) {
        case 'PRODUCT_LIST': 
            return { productList: payload.products }
        case "SORT_BY":
            return { ...state, sortBy: payload.filter }
        case "RATINGS":
            return { ...state, ratings: payload.filter }
        case "BEST_SELLER_ONLY":
            return { ...state, bestSellerOnly: payload.filter}
        case "IN_STOCK_ONLY":
            return { ...state, inStockOnly: payload.filter }
        case "CLEAR_FILTER":
            return {...state, sortBy: null, ratings: null, bestSellerOnly: false, inStockOnly: false}
        default: 
            throw new Error('No Case Found!')
    }
}