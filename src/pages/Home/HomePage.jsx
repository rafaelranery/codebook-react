import { Hero } from './components/Hero'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { usePageTitle } from '../../hooks/usePageTitle'

export const HomePage = () => {
    usePageTitle('Home')

    return (
        <>
            <Hero />
            <FeaturedProducts />
            <Testimonials />
            <Faq />
        </>
    )
}
