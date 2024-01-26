import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './scenes/Navbar'
import Contacts from './scenes/Contacts'
import Footer from './scenes/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AlarmPage from './pages/AlarmPage'
import AutomationPage from './pages/AutomationPage'

function App() {
    const [isPageScrolled, setIsPageScrolled] = useState(false)

    useEffect(() => {
        const checkScrollOffset = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

            scrollTop > 0 ? setIsPageScrolled(true) : setIsPageScrolled(false)
        }

        window.addEventListener('scroll', checkScrollOffset)

        return () => window.removeEventListener('scroll', checkScrollOffset)
    }, [])

    return (
        <div className="page">
            <Navbar isPageScrolled={isPageScrolled} />
            <main className="main">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/alarm" element={<AlarmPage />} />
                    <Route path="/automation" element={<AutomationPage />} />
                </Routes>
                <Contacts />
            </main>
            <Footer />
        </div>
    )
}

export default App