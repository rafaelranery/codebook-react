/* criando o contexto do filtro com o context api oferecido pelo react */
import { createContext, useContext, useReducer } from "react"

/* importando reducers */
import { filterReducer } from "../reducers"

/* criamos o initial state do context */
const filterInitialState = {
    /* storage dos produtos */
    productList: [],
    /* precisamos guarda informação sobre os filtros aplicados, fazemos isso
    aqui criando  propriedades específicas para cada filtro */
    inStockOnly: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

/* então, utilizamos a função createContext para criar o contexto desejado: */
const FilterContext = createContext(filterInitialState)

/* após criarmos o estado inicial e o contexto, precisamos criar um provider
JSX para disponibilziar este contexto ao elemento */
export const FilterProvider = ({ children }) => {
    /* criando acesso ao estado e ao dispatch através do useReducer */
    /* a sintaxe do useReducer toma como primeiro argumento a função reducer que criamos, e como segundo argumento o estado inicial da aplicação */
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    /* criamos uma função para inicializar a lista de produtos */
    function initialProductList(products) {
        /* criamos um dispatch a partir da desestruturaçãoa cima */
        dispatch({
            /* providenciamos o tipo do dispatch que será acessado no reducer */
            type: 'PRODUCT_LIST',
            /* e o payload da action, ou seja, seu recebimento */
            payload: {
                products: products
            }
        })
    }
    function setInStockOnly(filter) {
        /* criamos um dispatch a partir da desestruturaçãoa cima */
        dispatch({
            /* providenciamos o tipo do dispatch que será acessado no reducer */
            type: 'IN_STOCK_ONLY',
            /* e o payload da action, ou seja, seu recebimento */
            payload: {
                filter: filter
            }
        })
    }
    function setBestSellerOnly(filter) {
        /* criamos um dispatch a partir da desestruturaçãoa cima */
        dispatch({
            /* providenciamos o tipo do dispatch que será acessado no reducer */
            type: 'BEST_SELLER_ONLY',
            /* e o payload da action, ou seja, seu recebimento */
            payload: {
                filter: filter
            }
        })
    }
    function setSortBy(filter) {
        /* criamos um dispatch a partir da desestruturaçãoa cima */
        dispatch({
            /* providenciamos o tipo do dispatch que será acessado no reducer */
            type: 'SORT_BY',
            /* e o payload da action, ou seja, seu recebimento */
            payload: {
                filter: filter
            }
        })
    }
    function setRatings(filter) {
        /* criamos um dispatch a partir da desestruturaçãoa cima */
        dispatch({
            /* providenciamos o tipo do dispatch que será acessado no reducer */
            type: 'RATINGS',
            /* e o payload da action, ou seja, seu recebimento */
            payload: {
                filter: filter
            }
        })
    }
    function clearFilter() {
        /* criamos um dispatch a partir da desestruturaçãoa cima */
        dispatch({
            /* providenciamos o tipo do dispatch que será acessado no reducer */
            type: 'CLEAR_FILTER',
            /* e o payload da action, ou seja, seu recebimento */
        })
    }

    // MODO DE FILTRAGEM DA AULA DO SHUBAM

    function inStock(products) {
        return state.inStockOnly ? products.filter(item => item.in_stock === true) : products
    }
    function bestSeller(products) {
        return state.bestSellerOnly ? products.filter(item => item.best_seller === true) : products
    }
    function sort(products) {
        if (state.sortBy === 'lowtohigh') {
            return products.sort((a, b) => Number(a.price) - Number(b.price))
        }
        if (state.sortBy === 'hightolow') {
            return products.sort((a, b) => Number(b.price) - Number(a.price))
        }
        return products
    }
    function rating(products) {
        if (state.ratings === '4STARABOVE') {
            return products.filter(product => product.rating >= 4)
        }
        if (state.ratings === '3STARABOVE') {
            return products.filter(product => product.rating >= 3)
        }
        if (state.ratings === '2STARABOVE') {
            return products.filter(product => product.rating >= 2)
        }
        if (state.ratings === '1STARABOVE') {
            return products.filter(product => product.rating >= 1)
        }
        return products
    }

    const filteredProductList = rating(sort(inStock(bestSeller(state.productList))))

    const contextValue = {
        productList: filteredProductList,
        initialProductList,
        setInStockOnly,
        setBestSellerOnly,
        setSortBy,
        setRatings,
        clearFilter,
        inStockOnly: state.inStockOnly,
        bestSellerOnly: state.bestSellerOnly,
        sortBy: state.sortBy,
        ratings: state.ratings
    };

    return (
        <FilterContext.Provider value={contextValue}>
            {children}
        </FilterContext.Provider>
    )
}

/* agora, criamos um hook para acessarmos o contexto que foi oferecido, tal como o use selector */
export const useFilter = () => {
    const context = useContext(FilterContext);

    return context
}