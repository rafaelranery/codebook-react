import { AllRoutes } from './routes/AllRoutes'

import { Header, Footer } from './components'

import { useRestoreScroll } from './hooks'

import './App.css'


function App() {
  useRestoreScroll()
  
  return (
    <div className='dark:bg-dark'>
      <Header />
      <main>
        <AllRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
