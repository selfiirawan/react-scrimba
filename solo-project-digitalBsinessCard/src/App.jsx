import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interests'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Info />

            <div className='about-interest'>
                <About />
                <Interest />
            </div>

            <Footer />
        </>
    )
}