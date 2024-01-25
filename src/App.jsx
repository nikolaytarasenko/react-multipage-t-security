import { useState, useEffect } from 'react'
import Navbar from './scenes/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
    const [isPageScrolled, setIsPageScrolled] = useState(false)

    useEffect(() => {
        const checkScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

            scrollTop > 0 ? setIsPageScrolled(true) : setIsPageScrolled(false)
        }

        window.addEventListener('scroll', checkScroll)

        return () => window.removeEventListener('scroll', checkScroll)
    }, [isPageScrolled])

    return (
        <div className="page">
            <Navbar isPageScrolled={isPageScrolled} />
            <main className="main">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </main>
        </div>
    )
}

export default App