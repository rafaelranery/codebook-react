import { useEffect, useState } from 'react'
import { ProductCard } from '../../components'
import { FilterBar } from './components/FilterBar'
import { useLocation } from 'react-router-dom'


export const ProductsList = () => {
    const [filterOpen, setFilterOpen] = useState(false)
    const [products, setProducts] = useState([])
    /* getting the search params through the returned useLocation object */
    const search = useLocation().search
    /* getting the searchTerm through class URLSearchParams */
    const searchTerm = new URLSearchParams(search).get('q')

    useEffect(() => {
        async function fetchProducts() {
            /* precisamos fazer um ternário, e não simplesmente passar o valor do search term porque se não houver ELE NÃO RETORNA UMA STRING VAZIA, mas um NULL!!!! */
            const res = await fetch(`http://localhost:3000/products?name_like=${searchTerm ? searchTerm : ''}`)
            const data = await res.json()
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <>
            <main className='px-0'>
                <section className="my-5">
                    <div className="my-5 flex justify-between">
                        <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
                        <span>
                            <button onClick={() => setFilterOpen(!filterOpen)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button">
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                            </button>
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center lg:flex-row">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>
            {filterOpen && <FilterBar setFilterOpen={setFilterOpen} />}
        </>
    )
}